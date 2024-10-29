import React from "react";

function ProductData({ productImg, productInfo, productTitle, productPrice }) {
  return (
    <div className="productDataWrapper">
      <div className="card">
        <img
          src={productImg}
          className="card-img-top   productImgData"
          alt={productTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{productTitle}</h5>
          <p className="productTextData">{productInfo}</p>
          <div className="d-flex  mt-3 justify-content-between  align-items-center  ">
            <p className="card-text ">{productPrice}</p>
            <a href="#" className="btn btn-primary">
              Buy Now !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductData;
