import React from "react";

// image imports

import restpic1 from "../assets/swiggy/restaurant/pic1.jpeg";
import restpic2 from "../assets/swiggy/restaurant/pic2.jpeg";
import restpic3 from "../assets/swiggy/restaurant/pic3.jpeg";
import restpic4 from "../assets/swiggy/restaurant/pic4.jpeg";
import restpic5 from "../assets/swiggy/restaurant/pic5.jpeg";
import restpic6 from "../assets/swiggy/restaurant/pic6.jpeg";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// component imports
import RestaurantCard from "./RestaurantCard";
import DishSection from "./DishSection";

// data import
import { mumbaiRestaurantList } from "../utils/RestaurantList";
import { bannerDishList } from "../utils/RestaurantDishList";

function BodySection() {
  /*
  Learning Point : Config driven UI
  It is the best industry practice when data need to reflected in website as per different location parameter 
  eg swiggy, zomato, amazon or any dynamic sites

  How it is useful ?
  All company run different offers and special ad campaign on regional level which need to restricted to that particular city only and different offer program for different city are controlled though api.
  
  config api consits of segregation of section dedicated with region offer etc.
  
  eg. swiggy creat config ui using config api body section as follows 
  1] regional offer listing 
  2] regional restaurant listing
  3] display type carousel, direct display, etc

  1:46:19

  https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  */

  const baseImgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  console.log(baseImgURL + bannerDishList[0].imageId);

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
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {bannerDishList.map((foodItem) => (
                  <SwiperSlide key={foodItem.id}>
                    <DishSection
                      dishUrl={foodItem.action.link}
                      dishImage={`${baseImgURL + foodItem.imageId}`}
                      dishImageText={foodItem.description}
                    />
                  </SwiperSlide>
                ))}
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
                navigation={true}
                modules={[Navigation]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {mumbaiRestaurantList.map((hotelItem) => (
                  <SwiperSlide key={hotelItem.info.id}>
                    <RestaurantCard
                      foodUrl={hotelItem.cta.link}
                      foodImg={`${
                        baseImgURL + hotelItem.info.cloudinaryImageId
                      }`}
                      foodName={hotelItem.info.name}
                      foodRating={hotelItem.info.avgRating}
                      deliveryTime={hotelItem.info.sla.slaString}
                      FoodContent={hotelItem.info.cuisines.join(", ")}
                      location={hotelItem.info.areaName}
                      offerText={`${
                        hotelItem.info.aggregatedDiscountInfoV3.header +
                        " " +
                        hotelItem.info.aggregatedDiscountInfoV3.subHeader
                      }`}
                    />
                  </SwiperSlide>
                ))}
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
