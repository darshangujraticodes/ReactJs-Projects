import React from "react";

function DishSection({ urlText, dishImage, dishImageText }) {
  return (
    <>
      <a href={urlText} className=" cursor-pointer">
        <div className="dishCardWrap">
          <img src={dishImage} alt={dishImageText} />
        </div>
      </a>
    </>
  );
}

export default DishSection;
