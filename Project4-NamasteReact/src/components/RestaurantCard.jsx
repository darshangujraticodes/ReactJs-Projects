import React from "react";

import star from "../assets/swiggy/star.png";
import clock from "../assets/swiggy/clock.png";
import mapLoc from "../assets/swiggy/location.png";

import "./componentStyles/restaurantCardStyle.css";

function RestaurantCard({
  foodUrl,
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
      <a href={foodUrl} className=" cursor-pointer ">
        <div className="RestaurantCardWrap p-3">
          <div className="cardImgWrap relative overflow-hidden	">
            <img
              src={foodImg}
              className=" w-full object-center object-cover h-[175px] rounded-3xl  relative   "
              alt={`${foodName + " Image"}`}
            />
            <div className="imgOverlay ">
              <p className="text-white text-xl font-semibold uppercase">
                {offerText}
              </p>
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
            <p className="mt-2 leading-tight text-lg text-stone-500  ">
              {FoodContent}
            </p>
            <p className="flex mt-4">
              <img src={mapLoc} className="mr-2 iconBg" alt="" />
              {location}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default RestaurantCard;
