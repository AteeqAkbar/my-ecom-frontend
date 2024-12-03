// import noImage from "../../public/images/Rectangle-102.png";
"use client";
import ImageGallery from "./CarouselThumbnails";

const GalleryCarousel = ({ image }) => {
  let galleryimage;
  if (image == undefined || image.length == 0) {
    galleryimage = [
      {
        src: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
      },
    ];
  } else {
    galleryimage = image?.map((item) => ({
      src: `${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`,
    }));
  }
  let arrayData;
  function expandArray(array) {
    const newArray = array.slice(); // Create a copy of the original array

    while (newArray.length < 5) {
      // Repeat elements from the original array
      newArray.push(...array);
    }

    return newArray.slice(0, 5); // Trim the array to have a length of 5
  }

  if (galleryimage.length <= 4) {
    arrayData = expandArray(galleryimage);
  } else {
    arrayData = galleryimage;
  }

  return <ImageGallery slidesData={arrayData} />;
  // return <Carousel style={{ height: "px" }} images={galleryimage} />;
};

export default GalleryCarousel;
