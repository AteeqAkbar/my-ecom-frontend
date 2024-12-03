"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function App({ slidesData }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    // dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
  };

  //   const slidesData = [
  //     {
  //       id: 1,
  //       title: 'repellendus id ullam',
  //       label: 'Dolorem officiis temporibus.'
  //     }, {
  //       id: 2,
  //       title: 'excepturi consequatur est',
  //       label: 'Officia non provident dolor esse et neque.'
  //     }, {
  //       id: 3,
  //       title: 'eius doloribus blanditiis',
  //       label: 'Ut recusandae vel vitae molestiae id soluta.'
  //     }, {
  //       id: 4,
  //       title: 'nihil voluptates delectus',
  //       label: 'Qui vel consequatur recusandae illo repellendus.'
  //     }, {
  //       id: 5,
  //       title: 'nemo dolorem necessitatibus',
  //       label: 'Placeat odit velit itaque voluptatem.'
  //     }, {
  //       id: 6,
  //       title: 'dolorem quibusdam quasi',
  //       label: 'Adipisci officiis repudiandae.'
  //     },
  //   ];

  return (
    <div className="App">
      <style>{`
        .slider-wrapper {
            width: 100%;
            margin: auto;
          }
          .slick-slide {
            text-align: center;
            position: relative;
          }
          .slick-slide:focus {
            outline: none;
          }
          .slick-slide-title {
            text-transform: capitalize;
          }
          .slick-slide-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            {/* box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
              0 -6px 16px -6px hsla(0, 0%, 0%, 0.03); */}
          }
          .slick-slide-label {
            color: #fff;
            padding: 10px;
            position: absolute;
            left: 0px;
            font-size: 1.5em;
            bottom: 0px;
            width: 100%;
          }
          .slick-prev:before,
          .slick-next:before {
            color: #777777;
          }
        
        .thumbnail-slider-wrap {
  margin-top: 15px;
  height: 85px;
}
.thumbnail-slider-wrap .slick-track .slick-slide {
  text-align: center;
}
.thumbnail-slider-wrap .slick-track .slick-slide img {
  width: 70%;
}`}</style>
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          //@ts-ignore
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData?.map((slide) => (
            <div className="slick-slide" key={slide.src + Math.random()}>
              {/* <h2 className="slick-slide-title">{slide.title}</h2> */}

              <InnerImageZoom
                className="slick-slide-image "
                src={slide.src}
                zoomSrc={slide.src}
                zoomType="hover"
                zoomPreload={true}
              />
              {/* <label className="slick-slide-label">{slide.label}</label> */}
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            //@ts-ignore
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {slidesData.map((slide) => (
              <div className="slick-slide" key={slide.src + Math.random()}>
                <img
                  className="slick-slide-image"
                  src={slide.src}
                  alt="Slider Image 2"
                  width={10}
                  height={8}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
