import React from "react";

// image imports
import dish1 from "../assets/swiggy/dishes/dish1.jpeg";
import dish2 from "../assets/swiggy/dishes/dish2.jpeg";
import dish3 from "../assets/swiggy/dishes/dish3.jpeg";
import dish4 from "../assets/swiggy/dishes/dish4.jpeg";
import dish5 from "../assets/swiggy/dishes/dish5.jpeg";
import dish6 from "../assets/swiggy/dishes/dish6.jpeg";
import dish7 from "../assets/swiggy/dishes/dish7.jpeg";
import dish8 from "../assets/swiggy/dishes/dish8.jpeg";
import dish9 from "../assets/swiggy/dishes/dish9.jpeg";
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

  */

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
                <SwiperSlide>
                  <DishSection dishImage={dish1} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish2} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish3} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish4} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish5} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish6} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish7} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish8} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish9} />
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
                navigation={true}
                modules={[Navigation]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic1}
                    foodName="Chinese Wok"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic2}
                    foodName="KFC"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic3}
                    foodName="MacDonald"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic4}
                    foodName="Wow Momos"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic5}
                    foodName="Mojo Pizza"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic6}
                    foodName="Domino's"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
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
