import { useState } from "react";
import { CustomPriceSlider } from "./CustomPriceSliderProps";
import { CustomCheckbox } from "./CustomCheckbox";
const colors = ["White", "Black", "Blue", "Red"];
export default function Filter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  const [selectedColors, setSelectedColors] = useState([]);
  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };
  return (
    <div className="bb-shop-wrap bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px] sticky top-[0]">
      <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee]">
        <div className="bb-sidebar-title mb-[20px]">
          <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">
            Category
          </h3>
        </div>
        <div className="bb-sidebar-contact">
          {colors.map((color) => (
            <div key={color} className="mb-[14px]">
              <CustomCheckbox
                key={color}
                id={`color-${color.toLowerCase()}`}
                label={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee]">
        <div className="bb-sidebar-title mb-[20px]">
          <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">
            Weight
          </h3>
        </div>
        <div className="bb-sidebar-contact">
          {colors.map((color) => (
            <div key={color} className="mb-[14px]">
              <CustomCheckbox
                key={color}
                id={`color-${color.toLowerCase()}`}
                label={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee]">
        <div className="bb-sidebar-title mb-[20px]">
          <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">
            Color
          </h3>
        </div>
        <div className="bb-color-contact">
          <ul>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px] color-sidebar-active">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-1 w-[22px] h-[22px] block rounded-[20px] bg-[#c4d6f9]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-2 w-[22px] h-[22px] block rounded-[20px] bg-[#ff748b]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-3 w-[22px] h-[22px] block rounded-[20px] bg-[#000000]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-4 w-[22px] h-[22px] block rounded-[20px] bg-[#2bff4a]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-5 w-[22px] h-[22px] block rounded-[20px] bg-[#ff7c5e]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-6 w-[22px] h-[22px] block rounded-[20px] bg-[#f155ff]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-7 w-[22px] h-[22px] block rounded-[20px] bg-[#ffef00]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-8 w-[22px] h-[22px] block rounded-[20px] bg-[#c89fff]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-9 w-[22px] h-[22px] block rounded-[20px] bg-[#7bfffa]"></span>
              </div>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
              <div className="bb-sidebar-block-item relative">
                <span className="pro-color-10 w-[22px] h-[22px] block rounded-[20px] bg-[#56ffc1]"></span>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee]">
        <div className="bb-sidebar-title mb-[20px]">
          <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">
            Price
          </h3>
        </div>
        <div className="bb-price-range">
          <div className="price-range-slider relative w-full mb-[7px]">
            <CustomPriceSlider
              min={0}
              max={10000}
              step={10}
              onPriceChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
      <div className="bb-sidebar-block p-[20px]">
        <div className="bb-sidebar-title mb-[20px]">
          <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">
            Tags
          </h3>
        </div>
        <div className="bb-tags">
          <ul className="flex flex-wrap m-[-5px]">
            <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] select-none rounded-[10px] hover:bg-gradient-to-r from-[#bfdbfe]  to-[#fbcfe8]  text-[#686e7d]  hover:text-white cursor-pointer">
              <a className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] ">
                Clothes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
