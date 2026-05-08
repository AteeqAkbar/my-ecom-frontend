import axiosInstance from "./axiosInstance";

const unwrap = (response) => {
  const payload = response?.data;
  if (!payload) return null;
  if (payload.success === false) {
    throw new Error(payload.message || "Request failed");
  }
  return payload.data ?? payload;
};

const formatApiError = (error, fallback = "Something went wrong") => {
  const message =
    error?.response?.data?.message || error?.message || error?.response?.data?.error;
  return new Error(message || fallback);
};

const ensureArray = (value) => (Array.isArray(value) ? value : []);
const asList = (value) => {
  if (value === null || value === undefined) return [];
  return Array.isArray(value) ? value : [value];
};
const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeImage = (image) => {
  if (!image) return null;
  if (typeof image === "string") return { url: image };
  const url =
    image.url ||
    image.path ||
    image.imageUrl ||
    image.src ||
    image.location ||
    image?.attributes?.url ||
    image?.data?.attributes?.url;
  return url ? { ...image, url } : null;
};

const normalizeImages = (value) => {
  if (!value) return [];
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return [];

    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map(normalizeImage).filter(Boolean);
      }
      return normalizeImage(parsed) ? [normalizeImage(parsed)] : [];
    } catch {
      // Support comma-separated URLs from legacy payloads.
      return trimmed
        .split(",")
        .map((part) => part.trim())
        .map(normalizeImage)
        .filter(Boolean);
    }
  }
  if (Array.isArray(value)) {
    return value.map(normalizeImage).filter(Boolean);
  }
  const single = normalizeImage(value);
  return single ? [single] : [];
};

const normalizeCategory = (category) => {
  if (!category) return null;
  const id = category.id || category.categoryId || category._id || category.uuid;
  const name = category.name || category.title || category.categoryName || "Category";
  const image = normalizeImage(category.image || category.icon || category.thumbnail);
  return { ...category, id, name, image };
};

const normalizeProduct = (product) => {
  if (!product) return null;
  const id = product.id || product.productId || product._id || product.uuid;
  const slug =
    product.slug ||
    product.seoSlug ||
    product.productSlug ||
    (product.id ? String(product.id) : null) ||
    (product.name ? String(product.name).toLowerCase().replace(/\s+/g, "-") : String(id));
  const price = toNumber(product.price ?? product.basePrice ?? product.salePrice ?? 0);
  const discountPrice = toNumber(
    product.discountPrice ?? product.discount_price ?? product.finalPrice ?? price,
    price
  );

  const categoriesRaw = asList(
    product.categories ||
      product.Categories ||
      product.category ||
      product.Category ||
      product.categoryName ||
      product.categoryNames
  );
  const subcategoriesRaw = asList(
    product.subcategories ||
      product.Subcategories ||
      product.subcategory ||
      product.Subcategory
  );
  const categories = categoriesRaw
    .map((item) => (typeof item === "string" ? { name: item } : normalizeCategory(item)))
    .filter(Boolean);

  return {
    ...product,
    id,
    slug,
    name: product.name || product.title || product.productName || "Unnamed product",
    description: product.description || product.shortDescription || "",
    longDescription: product.longDescription || product.details || null,
    price,
    discountPrice,
    images: normalizeImages(product.images || product.image || product.thumbnail),
    categories,
    subcategories: subcategoriesRaw
      .map((item) => (typeof item === "string" ? { name: item } : normalizeCategory(item)))
      .filter(Boolean),
  };
};

const getAuthPayload = (payload) => {
  if (!payload || typeof payload !== "object") {
    return { token: null, user: null };
  }
  const token = payload.token || payload.jwt || payload.accessToken || null;
  // Backend returns { id, name, email, role, phone?, token } in `data`
  if (token && (payload.id != null || payload.email)) {
    return {
      token,
      user: {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        role: payload.role,
        phone: payload.phone ?? null,
      },
    };
  }
  const user = payload.user || payload.profile || payload.data || null;
  return { token, user };
};

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    return getAuthPayload(unwrap(response));
  } catch (error) {
    throw formatApiError(error, "Unable to login");
  }
};

export const register = async (payload) => {
  try {
    const response = await axiosInstance.post("/auth/register", payload);
    return getAuthPayload(unwrap(response));
  } catch (error) {
    throw formatApiError(error, "Unable to register");
  }
};

export const getMe = async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return unwrap(response);
  } catch (error) {
    throw formatApiError(error, "Unable to fetch profile");
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return ensureArray(unwrap(response)).map(normalizeCategory).filter(Boolean);
  } catch (error) {
    throw formatApiError(error, "Unable to fetch categories");
  }
};

export const fetchSubcategories = async () => {
  try {
    const response = await axiosInstance.get("/subcategories");
    return ensureArray(unwrap(response)).map(normalizeCategory).filter(Boolean);
  } catch (error) {
    throw formatApiError(error, "Unable to fetch subcategories");
  }
};

export const fetchSubcategoryById = async (id) => {
  try {
    const response = await axiosInstance.get(`/subcategories/${id}`);
    return normalizeCategory(unwrap(response));
  } catch (error) {
    throw formatApiError(error, "Unable to fetch subcategory");
  }
};

export const fetchCategoryById = async (id) => {
  try {
    const response = await axiosInstance.get(`/categories/${id}`);
    return normalizeCategory(unwrap(response));
  } catch (error) {
    throw formatApiError(error, "Unable to fetch category");
  }
};

export const fetchSingleProduct = async (slug) => {
  try {
    const response = await axiosInstance.get(`/products/${slug}`);
    const data = unwrap(response);
    return normalizeProduct(
      data && !Array.isArray(data) ? data : (ensureArray(data)?.[0] ?? null)
    );
  } catch {
    try {
      const response = await axiosInstance.get("/products", { params: { slug } });
      const data = ensureArray(unwrap(response));
      if (data[0]) return normalizeProduct(data[0]);

      const fallback = await axiosInstance.get("/products", {
        params: { page: 1, limit: 200 },
      });
      const fallbackItems = ensureArray(
        unwrap(fallback)?.rows || unwrap(fallback)?.items || unwrap(fallback)
      ).map(normalizeProduct);
      return fallbackItems.find((item) => item?.slug === slug) || null;
    } catch (error) {
      throw formatApiError(error, "Unable to fetch product");
    }
  }
};

export const fetchProducts = async (
  page = 1,
  categories = [],
  minPrice = null,
  maxPrice = null,
  subcategories = [],
  pageSize = 10
) => {
  try {
    const normalizedCategories = ensureArray(categories).map((item) =>
      String(item || "").trim().toLowerCase()
    );
    const normalizedSubcategories = ensureArray(subcategories).map((item) =>
      String(item || "").trim().toLowerCase()
    );
    const hasFilters =
      normalizedCategories.length > 0 ||
      normalizedSubcategories.length > 0 ||
      minPrice !== null ||
      maxPrice !== null;

    const params = {
      page: hasFilters ? 1 : page,
      limit: hasFilters ? 500 : pageSize,
    };
    if (categories.length) params.categories = categories.join(",");
    if (subcategories.length) params.subcategories = subcategories.join(",");
    if (minPrice !== null) params.minPrice = Number(minPrice);
    if (maxPrice !== null) params.maxPrice = Number(maxPrice);

    const response = await axiosInstance.get("/products", { params });
    const payload = unwrap(response);
    const serverItems = ensureArray(payload?.rows ?? payload?.items ?? payload)
      .map(normalizeProduct)
      .filter(Boolean);

    const filteredItems = hasFilters
      ? serverItems.filter((product) => {
          const productCategories = ensureArray(product?.categories)
            .map((cat) => String(cat?.name || "").trim().toLowerCase())
            .filter(Boolean);
          const productSubcategories = ensureArray(product?.subcategories)
            .map((subcat) => String(subcat?.name || "").trim().toLowerCase())
            .filter(Boolean);
          const productPrice = toNumber(product?.discountPrice ?? product?.price, 0);

          const matchCategory =
            normalizedCategories.length === 0 ||
            normalizedCategories.some((name) => productCategories.includes(name));
          const matchSubcategory =
            normalizedSubcategories.length === 0 ||
            normalizedSubcategories.some((name) => productSubcategories.includes(name));
          const matchMinPrice = minPrice === null || productPrice >= Number(minPrice);
          const matchMaxPrice = maxPrice === null || productPrice <= Number(maxPrice);

          return matchCategory && matchSubcategory && matchMinPrice && matchMaxPrice;
        })
      : serverItems;

    const total = hasFilters
      ? filteredItems.length
      : payload?.total ??
        payload?.count ??
        payload?.pagination?.totalItems ??
        payload?.pagination?.total ??
        filteredItems.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (page - 1) * pageSize;
    const paginatedItems = hasFilters
      ? filteredItems.slice(start, start + pageSize)
      : filteredItems;

    return {
      data: paginatedItems,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: totalPages,
          total,
        },
      },
    };
  } catch (error) {
    throw formatApiError(error, "Unable to fetch products");
  }
};

export const postOrder = async (payload) => {
  try {
    const response = await axiosInstance.post("/orders", payload);
    return unwrap(response);
  } catch (error) {
    throw formatApiError(error, "Unable to create order");
  }
};

export const fetchMyOrders = async () => {
  try {
    const response = await axiosInstance.get("/orders/my");
    return ensureArray(unwrap(response));
  } catch (error) {
    throw formatApiError(error, "Unable to fetch your orders");
  }
};

export const fetchOrderById = async (id) => {
  try {
    const response = await axiosInstance.get(`/orders/${id}`);
    return unwrap(response);
  } catch (error) {
    throw formatApiError(error, "Unable to fetch order");
  }
};

export const fetchDeliveryCharge = async () => {
  try {
    const response = await axiosInstance.get("/settings/delivery-charge");
    const data = unwrap(response);
    const charge = Number(data?.deliveryCharge);
    return Number.isFinite(charge) && charge >= 0 ? charge : 250;
  } catch (error) {
    // Fallback to default if settings endpoint is unavailable.
    return 250;
  }
};

export const checkUserExists = async (email) => {
  try {
    const response = await axiosInstance.get("/auth/me", { params: { email } });
    return !!unwrap(response);
  } catch {
    return false;
  }
};
