import { useEffect, useState } from "react";
import { CustomPriceSlider } from "./CustomPriceSliderProps";
import { CustomCheckbox } from "./CustomCheckbox";
import { fetchCategories } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
const colors = ["White", "Black", "Blue", "Red"];
export default function Filter() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });
  useEffect(() => {
    if (searchParams.has("categories")) {
      const categories = searchParams.getAll("categories");
      setSelectedColors(categories);
    }
    if (searchParams.has("minPrice")) {
      setMinPrice(parseInt(searchParams.get("minPrice")));
    }
    if (searchParams.has("maxPrice")) {
      setMaxPrice(parseInt(searchParams.get("maxPrice")));
    }
  }, [searchParams]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  const handleApplyFilter = (e) => {
    e.preventDefault();
    let params = new URLSearchParams();

    selectedColors.forEach((name) => {
      params.append("categories", name);
    });
    if (minPrice > 0) {
      params.append("minPrice", minPrice);
    }
    if (maxPrice < 10000) {
      params.append("maxPrice", maxPrice);
    }

    router.push("products" + "?" + params.toString(), { scroll: false });
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
            Categories
          </h3>
        </div>
        <div className="bb-sidebar-contact">
          {error && <div>An error occurred: {error.message}</div>}
          {data?.data?.map((cat) => (
            <div key={cat?.name} className="mb-[14px]">
              <CustomCheckbox
                id={`color-${cat?.name.toLowerCase()}`}
                label={cat?.name}
                checked={selectedColors.includes(cat?.name)}
                onChange={() => handleColorChange(cat?.name)}
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
          <button
            onClick={handleApplyFilter}
            className="transition-all mt-3 px-[13px] duration-[0.3s] ease-in-out w-full  cursor-pointer h-[40px] font-light text-white leading-[32px] bg-grad font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow3 "
          >
            Apply Filter
          </button>
          <button
            onClick={() => {
              router.push("/products", { scroll: false });
              setSelectedColors([]);
            }}
            className="transition-all mt-3 px-[13px] duration-[0.3s] ease-in-out w-full  cursor-pointer h-[40px] font-light text-white leading-[32px] bg-grad font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] hover:bg-gradient-to-br hover:from-indigo-200 hover:to-pink-200 hover:via-blue-200 hover:text-white shadow3 "
          >
            Clear Filter
          </button>
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
                Clocks
              </a>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] select-none rounded-[10px] hover:bg-gradient-to-r from-[#bfdbfe]  to-[#fbcfe8]  text-[#686e7d]  hover:text-white cursor-pointer">
              <a className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] ">
                Decor
              </a>
            </li>
            <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] select-none rounded-[10px] hover:bg-gradient-to-r from-[#bfdbfe]  to-[#fbcfe8]  text-[#686e7d]  hover:text-white cursor-pointer">
              <a className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] ">
                Premium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
