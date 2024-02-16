import React, { useEffect, useState, ID } from "react";
import "./styles/Component-Style.css";
import CardBox from "./CardBox";
import HeaderBar from "./HeaderBar";

const BASE_URL = "http://localhost:9000";

function HeroSection({ searchdata = "null" }) {
  return (
    <>
      <div className="HeroSection-Wrap py-5">
        <div className="container">
          <div className="row">
            <div className=" d-flex flex-wrap justify-content-center ">
              {searchdata?.map((food) => (
                <CardBox
                  key={food.name}
                  foodImg={BASE_URL + food.image}
                  foodName={food.name}
                  foodDescript={food.text}
                  // foodPrice={`$${food.price}.00`}
                  foodPrice={`$${food.price.toFixed(2)}`}
                />
              ))}

              {/* <CardBox
                foodImg={food1}
                foodName="Heading"
                foodDescript="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum"
                foodPrice="$25.00"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
