import React, { useState } from "react";

// import data
import {
  popularDishes,
  mumbaiRestaurantList,
  foodList,
} from "../utils/RestaurantData";
import { baseImgURL } from "../utils/config";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../components/componentStyles/SwiperStyle.css";
import DishSection from "../components/DishSection";

function SearchPage() {
  const [foodData, setfoodData] = useState(foodList);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log(foodList);

  function filterData(searchQuery, foodListParams) {
    // console.log(searchQuery, foodListParams);
    // const foodSearchData = foodListParams.filter((item) =>
    //   item.info.specialFood.includes(searchQuery)
    // );
    // console.log(foodSearchData);
    // return foodSearchData;
  }

  const newdata = foodList.filter((item) =>
    item.info.name.includes(searchQuery)
  );
  console.log(newdata);

  return (
    <>
      <section className="searchSection mt-[150px]">
        <div className="container mx-4 md:mx-auto">
          <div className="inputWrap flex justify-center relative">
            <input
              type="text"
              placeholder="Search for Restaurant and Food "
              className=" relative w-[820px] text-zinc-600 rounded-lg text-2xl px-3 py-2 border-2 border-zinc-500 focus:border-zinc-500 focus-visible:border-zinc-500 "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <span className="text-2xl text-zinc-600  absolute  bottom-2 right-64 ">
              <i className="fa-solid fa-magnifying-glass pr-2"></i>
            </span>
            <button
              className=" text-white bg-[#E26031] text-xl ml-4 px-4 py-2 rounded-lg  "
              onClick={
                () => {}
                // const data = foodList.filter((item) =>
                //   item.info.specialFood.includes(searchQuery).toLowercase()
                // setfoodData(data);
                // );
              }
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container  mx-4 md:mx-auto">
          <div className="headTextWrap">
            <h1 className="text-center mt-10 text-3xl">Popular Cuisines</h1>
          </div>
          <div className="popularDishCarousel">
            <div className="restuarantSliderWrap">
              <Swiper
                slidesPerView={9}
                // navigation={true}
                // loop={true}
                spaceBetween={25}
                modules={[Navigation]}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {popularDishes.map((dishItem) => (
                  <SwiperSlide key={dishItem.id}>
                    <DishSection
                      dishImage={`${baseImgURL + dishItem.imageId}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="filterDataSection">
        <div className="container mx-4 md:mx-auto">
          <div className="row ">
            {foodData?.map((item) => (
              <div className="col3" key={item.info.id}>
                <div className="foodDataWrapper">
                  <ul>
                    <li>Name : {item.info.name}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchPage;
