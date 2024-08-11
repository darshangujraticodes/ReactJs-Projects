import React from "react";

function DishSection({ dishUrl, dishImage, dishImageText }) {
  return (
    <>
      <a href={dishUrl} className=" cursor-pointer">
        <div className="dishCardWrap">
          <img src={dishImage} alt={`${dishImageText + " Image"}`} />
        </div>
      </a>
    </>
  );
}

export default DishSection;
