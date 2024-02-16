import React from "react";
import "./styles/Component-Style.css";

function CardBox({ foodImg, foodName, foodDescript, foodPrice }) {
  return (
    <>
      <div className="card-wrap">
        <div className="row">
          <div className="col-4 px-3 text-center">
            <div className="img-wrap">
              <img src={foodImg} alt="" />
            </div>
          </div>
          <div className="col-8 px-3 ">
            <div className="content-wrap">
              <h4>{foodName}</h4>
              <p>{foodDescript}</p>
              <div className="price-wrap d-flex justify-content-end">
                <p className="click-btn m-0 fw-bold">{foodPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBox;
