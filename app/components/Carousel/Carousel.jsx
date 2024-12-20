"use client";
import { useEffect, useState } from "react";
import img1 from "../../image/img1.jpg";
import img2 from "../../image/img5.jpg";
import img3 from "../../image/img3.jpg";
import img4 from "../../image/img4.jpg";
const items = [
  {
    id: 0,
    image: `https://paladimstudio.com/cdn/shop/files/vreme-monochrome-grey-wall-clock-oak-wood-handmade-handcrafted-sculpture-timepiece-art-decor-by-paladim-studio-3_copy.jpg?v=1698780025&width=1500`,
    // image: img1?.src,
    author: "LUNDEV",
    title: "DESIGN SLIDER 1",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 1,
    image: `https://paladimstudio.com/cdn/shop/files/mashina-slider.jpg?v=1727435212&width=1500`,
    // image: img2?.src,
    author: "LUNDEV",
    title: "DESIGN SLIDER 2",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 2,
    // image: img3?.src,
    image: `https://paladimstudio.com/cdn/shop/files/kletka-oak-wall-clock-by-paladim-interior-banner-ai.jpg?v=1699790857&width=1500`,
    author: "LUNDEV",
    title: "DESIGN SLIDER 3",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 3,
    image: `https://paladimstudio.com/cdn/shop/files/mixor-oak-wall-clock-handmade-crafted-modern-minimalist-decor-by-paladim-studio-3.jpg?v=1718532869&width=1946`,
    // image: img4?.src,
    author: "LUNDEV",
    title: "DESIGN SLIDER 4",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor sit amet...",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animation !== "") setAnimation("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [animation]);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       nextSlide();
  //     }, 3000);

  //     return () => clearInterval(timer);
  //   }, []);

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
            <img
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
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
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
                <img src={item.image} />
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
