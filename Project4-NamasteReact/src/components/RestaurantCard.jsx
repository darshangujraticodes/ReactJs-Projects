import React from "react";
import restpic1 from "../assets/swiggy/restaurant/pic6.jpeg";
import star from "../assets/swiggy/star.png";
import clock from "../assets/swiggy/clock.png";

// import "./componentStyles/restaurantCardStyle.css";

function RestaurantCard() {
  return (
    <>
      <div className="RestaurantCardWrap p-3">
        <div className="cardImgWrap overflow-hidden	">
          <img
            src={restpic1}
            className=" w-full object-center object-cover h-[175px] rounded-3xl  relative   "
            alt=""
          />
          <div className="imgOverlay ">
            <p className="text-white text-2xl uppercase"> ITEMS AT ₹179 </p>
          </div>
        </div>
        <div className="cardContentWrap ">
          <h3>Chinese Wok</h3>
          <div className="contentWrap flex">
            <div className="starWrap flex">
              <img src={star} alt="" /> <p className="text-xl">4.3</p>
            </div>
            <div className="clockWrap flex">
              <img src={star} alt="" /> <p className="text-xl">35-40 mins</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantCard;
