import React from "react";

import star from "../assets/swiggy/star.png";
import clock from "../assets/swiggy/clock.png";

import "./componentStyles/restaurantCardStyle.css";

function RestaurantCard({
  foodImg,
  foodName,
  foodRating,
  deliveryTime,
  FoodContent,
  location,
  offerText,
}) {
  return (
    <>
      <div className="RestaurantCardWrap p-3">
        <div className="cardImgWrap relative overflow-hidden	">
          <img
            src={foodImg}
            className=" w-full object-center object-cover h-[175px] rounded-3xl  relative   "
            alt=""
          />
          <div className="imgOverlay ">
            <p className="text-white text-2xl uppercase"> {offerText} </p>
          </div>
        </div>
        <div className="cardContentWrap px-4 py-3 ">
          <h3 className="text-2xl"> {foodName} </h3>
          <div className="contentWrap flex mt-1 items-center">
            <div className="starWrap flex items-center mr-3">
              <img src={star} className="mr-2 iconBg" alt="" />
              <p className="text-lg">{foodRating}</p>
            </div>
            <div className="clockWrap flex items-center">
              <img src={clock} className="mr-2 iconBg" alt="" />
              <p className="text-lg">{deliveryTime}</p>
            </div>
          </div>
          <p className="mt-2 leading-tight text-lg text-stone-500   ">
            <span className="  text-justify  ">{FoodContent}</span>
            <br /> <span>{location}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
