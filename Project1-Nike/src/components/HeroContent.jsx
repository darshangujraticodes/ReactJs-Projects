import React from "react";
import nike_shoe from "../assets/nike-shoe-image.png";
import amazon_icon from "../assets/amazon-icon.png";
import flipkart_icon from "../assets/flipkart-icon.png";

function HeroContent() {
  return (
    <>
      <div className="herocontent-wrapper md:py-16 py-8">
        <div className="container-section">
          <div className="grid md:grid-cols-2  gap-4">
            <div className="  hero-content-wrap px-3">
              <h1 className="hero-heading">Your feet deserve the best</h1>
              <div className="lg:w-4/5">
                <p className="hero-text py-4 ">
                  {`Reward Yourself with Best Thing, 
                  because You are the Best and You deserve best.`}
                </p>
                <div className="btn-wrapper mt-5 ">
                  <a href="" className="page-btn ">
                    Shop Now
                  </a>
                  <a href="" className="ml-5 page-btn2">
                    Notify Me
                  </a>
                </div>
                <div className="shop-wrap-icon mt-6 ">
                  <p className="hero-text">Also Available On</p>
                  <div className="icon-wrap flex mt-3">
                    <img
                      src={flipkart_icon}
                      className="w-[50px] h-[50px] mr-5"
                      alt="Flipkart Icon"
                    />
                    <img
                      src={amazon_icon}
                      className="w-[50px] h-[50px] "
                      alt="Amazon Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image-wrap px-3">
              <div className="img-wrap">
                <img src={nike_shoe} className="img-fluid" alt="Nike Shoe" />
              </div>
            </div>
            {/* <div className=" block md:hidden hero-content-wrap px-3">
              <h1 className="hero-heading">Your feet deserve the best</h1>
              <div className="lg:w-4/5">
                <p className="hero-text pt-4 pl-5">
                  {`Reward Yourself with Best Thing, 
                  because You are the Best and You deserve best.`}
                </p>
                <div className="btn-wrapper">
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroContent;
