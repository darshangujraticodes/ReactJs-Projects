import React from "react";
import ProductData from "../components/ProductData";
import img1 from "../assets/boy-tshirt.png";
import { productData } from "../assets/productDetails";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <div className="offset-md-1"></div> */}

          <div className="  col-md-2">
            <ProductData
              productImg={img1}
              productInfo="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              productTitle="Boy Tshirt"
              productPrice="899"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
