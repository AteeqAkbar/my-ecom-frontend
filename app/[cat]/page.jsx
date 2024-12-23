"use client";
import { useParams } from "next/navigation";
import React, { useCallback } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/Cards/ProductList";
import CategoriesSlider from "../components/Swiper/CategoriesSlider";
import { useSelector } from "react-redux";
import { convertJsonToHtml, generateImageUrl } from "../utils/helperFun";
import ProductSlider from "../components/Swiper/ProductSlider";
import FAQPageSchema from "../components/Seo/FAQPageSchema";
const findDataByName = (name, items) => {
  return items?.data?.find((item) => item.name === name) || null;
};

const page = () => {
  const { cat } = useParams(); // Get category parameter from URL
  const { items, loading, error } = useSelector((state) => state.categories); // Access categories state

  const decodedString = decodeURIComponent(cat); // Decode the category string

  // Use useCallback to memoize the category finding logic
  const category = useCallback(() => {
    return findDataByName(decodedString, items); // Return the found category
  }, [decodedString, items]); // Ensure dependencies include decodedString and items

  const foundCategory = category(); // Call to get the found category

  return (
    <>
      {/* seo */}
      <title>{`${decodedString} | Buy ${decodedString} and Festive Needs at Best Prices | Deco`}</title>
      <meta name="description" content={foundCategory?.description}></meta>
      <link
        rel="canonical"
        href={`${window.location.origin}${window.location.pathname}`}
      ></link>

      <meta
        property="og:title"
        content={`${decodedString} | Buy ${decodedString} and Festive Needs at Best Prices | Deco`}
      ></meta>
      <meta
        property="og:description"
        content={foundCategory?.description}
      ></meta>
      <meta
        property="og:image"
        content={generateImageUrl(foundCategory?.image?.url)}
      ></meta>
      <meta
        property="og:url"
        content={`${window.location.origin}${window.location.pathname}`}
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${decodedString} | Buy ${decodedString} and Festive Needs at Best Prices | Deco`}
      />
      <meta name="twitter:description" content={foundCategory?.description} />
      <meta
        name="twitter:image"
        content={generateImageUrl(foundCategory?.image?.url)}
      />

      <Breadcrumb title={decodedString} />
      <section className="section-category pt-[50px] max-[1199px]:pt-[35px] mb-[24px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <CategoriesSlider />
            </div>
          </div>
        </div>
      </section>
      <ProductList />
      <ProductSlider />

      <section className="section-category pt-[50px] max-[1199px]:pt-[35px] mb-[24px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            {foundCategory?.descriptionSeo && (
              <div
                dangerouslySetInnerHTML={{
                  __html: convertJsonToHtml(foundCategory?.descriptionSeo),
                }}
                className="w-full px-[12px] font-Poppins tracking-[0.03rem] mb-[16px] text-[14px] text-[#686e7d] text-xs border-[1px] border-solid bg-[#f8f8fb] border-[#eee] p-[20px] rounded-[20px] aos-init aos-animate"
              ></div>
            )}
          </div>
        </div>
      </section>
      <FAQPageSchema faqs={foundCategory?.faqs} />
    </>
  );
};

export default page;
