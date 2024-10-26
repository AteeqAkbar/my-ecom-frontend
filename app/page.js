import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  const items = [
    {
      image: "image/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      image: "image/img2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "NATURE",
      description: "Consectetur adipisicing elit...",
    },
    {
      image: "image/img3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "CITYSCAPE",
      description: "Eaque optio ratione aliquid assumenda...",
    },
    {
      image: "image/img4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "TECH",
      description: "Labore et dolore magna aliqua...",
    },
  ];
  return (
    <>
      <Carousel />;
      <Carousel />;
      <Carousel />;
      <Carousel />;
      <Carousel />;
    </>
  );
}
