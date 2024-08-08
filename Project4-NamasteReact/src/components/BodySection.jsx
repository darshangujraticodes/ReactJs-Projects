import React from "react";
import dish1 from "../assets/swiggy/dishes/dish1.jpeg";
import dish2 from "../assets/swiggy/dishes/dish2.jpeg";
import dish3 from "../assets/swiggy/dishes/dish3.jpeg";
import dish4 from "../assets/swiggy/dishes/dish4.jpeg";
import dish5 from "../assets/swiggy/dishes/dish5.jpeg";
import dish6 from "../assets/swiggy/dishes/dish6.jpeg";
import dish7 from "../assets/swiggy/dishes/dish7.jpeg";
import dish8 from "../assets/swiggy/dishes/dish8.jpeg";
import dish9 from "../assets/swiggy/dishes/dish9.jpeg";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RestaurantCard from "./RestaurantCard";

function BodySection() {
  return (
    <>
      <div className="dishSection mt-[120px]  relative z-10">
        <div className="container mx-auto">
          <div className="dishSliderWrap">
            <div className="textWrap mb-5">
              <h1 className="text-3xl font-medium tracking-wider">
                What's on your mind?
              </h1>
            </div>

            <div className="dishCarousel ">
              <Swiper
                spaceBetween={30}
                slidesPerView={7}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish4} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish5} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish6} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish7} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish8} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="dishCardWrap">
                    <img src={dish9} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <hr className="dividerLine my-9" />
        </div>
      </div>

      <div className="topRestaurantSliderSection">
        <div className="container mx-auto">
          <div className="restaurantContentWrap">
            <div className="headContentWrap mb-5">
              <h1 className="text-3xl font-medium tracking-wider">
                Top Restaurant Chains in Mumbai
              </h1>
            </div>

            <div className="restuarantSliderWrap">
              <Swiper
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurantListingSection"></div>
    </>
  );
}

export default BodySection;
