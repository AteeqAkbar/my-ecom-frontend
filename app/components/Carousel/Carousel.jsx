"use client";
import { useEffect, useState } from "react";
import img1 from "../../image/111.jpg";
import img2 from "../../image/222.jpg";
import img3 from "../../image/333.jpg";
import img4 from "../../image/img4.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
const items = [
  {
    id: 0,
    // image: `https://paladimstudio.com/cdn/shop/files/vreme-monochrome-grey-wall-clock-oak-wood-handmade-handcrafted-sculpture-timepiece-art-decor-by-paladim-studio-3_copy.jpg?v=1698780025&width=1500`,
    image: img1,
    author: "DICO",
    title: "MIXOR",
    topic: "Wall Clock",
    description: "      ",
    link: "/products/mixor-wall-clock",
  },
  {
    id: 1,
    // image: `https://paladimstudio.com/cdn/shop/files/mashina-slider.jpg?v=1727435212&width=1500`,
    image: img2,
    author: "DICO",
    title: "KLETKA Organic",
    topic: "Wall Clock",
    description: "",
    link: "/products/kletka-organic-wall-clock",
  },
  {
    id: 2,
    image: img3,
    // image: `https://paladimstudio.com/cdn/shop/files/kletka-oak-wall-clock-by-paladim-interior-banner-ai.jpg?v=1699790857&width=1500`,
    author: "DICO",
    title: "Modern ",
    topic: "Wooden Clock",
    description: "",
    link: "/products/modern-wooden-wall-clock",
  },
  // {
  //   id: 3,
  //   image: `https://paladimstudio.com/cdn/shop/files/mixor-oak-wall-clock-handmade-crafted-modern-minimalist-decor-by-paladim-studio-3.jpg?v=1718532869&width=1946`,
  //   // image: img4,
  //   author: "LUNDEV",
  //   title: "DESIGN SLIDER 4",
  //   topic: "ANIMAL",
  //   description: "Lorem ipsum dolor sit amet...",
  // },
];

const Slider = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animation !== "") setAnimation("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [animation]);
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Function to handle previous slide
  const prevSlide = () => {
    setAnimation("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  // Function to handle next slide
  const nextSlide = () => {
    setAnimation("next");
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const displayCount = 4;

  // Create a new array of items to display based on currentIndex
  const displayedItems = [];

  for (let i = 0; i < displayCount; i++) {
    displayedItems.push(items[(currentIndex + i) % items.length]);
  }
  return (
    <div className={`w-full h-full flex relative`}>
      {/* <!-- carousel --> */}
      <div className={`carousel ${animation}`}>
        {/* <!-- list item --> */}
        <div className="list">
          <div className="item">
            <Image
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
            />
            <div className="content">
              <div className="author">{items[currentIndex].author}</div>
              <div className="title">{items[currentIndex].title}</div>
              <div className="topic">{items[currentIndex].topic}</div>
              <div className="description">
                {items[currentIndex].description}
              </div>
              <div className="buttons">
                <button onClick={() => router.push(items[currentIndex].link)}>
                  BUY NOW
                </button>
                {/* <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          {/* {items.map((item, i) => {
            if (i === currentIndex) {
              return (
                <div className="item">
                  <img src={item.image} />
                  <div className="content">
                    <div className="author">{item.author}</div>
                    <div className="title">{item.title}</div>
                    <div className="topic">{item.topic}</div>
                    <div className="des">{item.description}</div>
                    <div className="buttons">
                      <button>SEE MORE</button>
                      <button>SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
              );
            }
          })} */}
        </div>
        {/* <!-- list thumnail --> */}
        <div className="thumbnail">
          {displayedItems.map((item, i) => {
            return (
              <div
                // onClick={() => {
                //   setAnimation("next");
                //   setCurrentIndex(i);
                // }}
                key={item.id + item.author}
                className={`item 
                //cursor-pointer
                `}
              >
                <Image src={item.image} alt={item.title} />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="description">Description</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- next prev --> */}

        <div className="arrows">
          <button onClick={() => prevSlide()} id="prev">
            {"<"}
          </button>
          <button onClick={() => nextSlide()} id="next">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
