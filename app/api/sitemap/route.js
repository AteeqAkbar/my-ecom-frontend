import { baseURLapi, baseURLfrontend } from "@/app/services/axiosInstance";
import axios from "axios";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await axios.get(`${baseURLapi}/categories`);
    const products = await axios.get(
      `${baseURLapi}/products?pagination[pageSize]: 1000`
    );
    console.log(products.data);
    // You can process products here if needed, but it looks like you're only using categories for the sitemap.

    const urlNodes = response.data.data.map((category) => ({
      loc: `${baseURLfrontend}/${category.name}`,
      changefreq: "daily",
      priority: "0.8",
    }));
    const urlNodes2 = products.data.data.map((category) => ({
      loc: `${baseURLfrontend}/products/${category.slug}`,
      changefreq: "daily",
      priority: "0.8",
    }));

    const xml = `
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      >
        ${urlNodes
          .map(
            (node) =>
              `<url>
                <loc>${node.loc}</loc>
                <changefreq>${node.changefreq}</changefreq>
                <priority>${node.priority}</priority>
              </url>`
          )
          .join("")}
        ${urlNodes2
          .map(
            (node) =>
              `<url>
                <loc>${node.loc}</loc>
                <changefreq>${node.changefreq}</changefreq>
                <priority>${node.priority}</priority>
              </url>`
          )
          .join("")}
          <url>
                <loc>${baseURLfrontend}</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
              </url>
          <url>
                <loc>${baseURLfrontend}/products</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
              </url>
      </urlset>`;

    // Return the XML as a response
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response("Error fetching data", { status: 500 });
  }
}
