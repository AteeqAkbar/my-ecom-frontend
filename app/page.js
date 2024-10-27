import ProductList from "./components/Cards/ProductList";
import Carousel from "./components/Carousel/Carousel";
import ExploreCategories from "./components/ExploreCategories";

export default function Home() {
  return (
    <>
      <Carousel />
      <ExploreCategories />

      <ProductList />
    </>
  );
}
