import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import heroImg from "../assets/heroImg.svg";
import React from "react";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";
import bg1 from "../assets/bgpattern.svg";

function TailwindPractice() {
  return (
    <>
      {/* navbar */}
      <nav id="navbarSection" className="topPadding  mx-4 md:mx-0 z-30">
        <div className="container mx-auto">
          <div className="navWrap flex justify-between	">
            <div className="logoImgWrap ">
              <img src={logo} alt="" />
            </div>
            <div className="hidden md:flex menuWrap ">
              <ul className=" flex justify-center	">
                <li className="px-4">
                  <a href="#">Pricing</a>
                </li>
                <li className="px-4">
                  <a href="#">Product</a>
                </li>
                <li className="px-4">
                  <a href="#">About Us</a>
                </li>
                <li className="px-4">
                  <a href="#">Careers</a>
                </li>
                <li className="px-4">
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div className="navBtnWrap">
              <a href="" className="btn">
                Get Started
              </a>
            </div>
            <div className=" flex  md:hidden  mobBtnWrap">
              <a href="">
                <img src={hamburger} alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}

      <section className="sectionPadding mx-4 md:mx-0" id="heroSection">
        <div className="container mx-auto flex flex-col-reverse md:flex-row ">
          {/* left content */}
          <div className="leftContentWrap  w-full  md:w-1/2">
            <h1 className="  text-4xl md:text-6xl leading-snug md:leading-tight  text-center  md:text-left    font-bold mb-7 text-[#283054] ">
              Bring everyone <span className="   block  "></span> together to
              build <span className="   block  "></span> better products.
            </h1>
            <p className="mb-7 px-4 md:px-0 ptext leading-normal text-center  md:text-left  text-[#949396] ">
              Manage make it simple for softwate teams{" "}
              <span className="   md:block  "></span> to plan day-to-day tasks
              while keeping the <span className="  md:block  "></span> larger
              team goals in view.
            </p>
            <div className="btnWrap flex justify-center md:justify-start">
              <a href="" className="btn">
                Get Started
              </a>
            </div>
          </div>
          {/* right content */}
          <div className="rightContentWrap  w-full  md:w-1/2">
            <div className="imgWrap">
              <img src={heroImg} className=" relative z-40" alt="" />
              <img
                src={bg1}
                className="absolute z-[-1] top-[-70px] md:top-[-160px] md:right-[70px]"
                alt=" "
              />
            </div>
          </div>
        </div>
      </section>

      {/* card info */}
      <section className="bottomPadding" id="cardSection">
        <div className="container mx-auto">
          <div className="row">
            <div className="col3">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card3} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem
                  </p>
                  <div className="btnWrap pt-4  flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col3">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card3} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem
                  </p>
                  <div className="btnWrap pt-4  flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col3">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card3} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem
                  </p>
                  <div className="btnWrap pt-4  flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col3">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card3} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem
                  </p>
                  <div className="btnWrap pt-4  flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col4">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card1} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem eum optio laboriosam adipisci? Odit ullam eum
                    dolores perferendis, beatae voluptates distinctio autem
                    placeat voluptate consectetur, eos aliquid. Tenetur,
                    facilis?
                  </p>
                  <div className="btnWrap pt-4  flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col4">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card1} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2 text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem eum optio laboriosam adipisci? Odit ullam eum
                    dolores perferendis, beatae voluptates distinctio autem
                    placeat voluptate consectetur, eos aliquid. Tenetur,
                    facilis?
                  </p>
                  <div className="btnWrap pt-4 flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col4">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card1} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2  text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem eum optio laboriosam adipisci? Odit ullam eum
                    dolores perferendis, beatae voluptates distinctio autem
                    placeat voluptate consectetur, eos aliquid. Tenetur,
                    facilis?
                  </p>
                  <div className="btnWrap pt-4 flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col6">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card2} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2 text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem eum optio laboriosam adipisci? Odit ullam eum
                    dolores perferendis, beatae voluptates distinctio autem
                    placeat voluptate consectetur, eos aliquid. Tenetur,
                    facilis?
                  </p>
                  <div className="btnWrap pt-4 flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col6">
              <div className="cardInfoWrap">
                <div className="cardImgWrap">
                  <img src={card2} className="imgFluid" alt="" />
                </div>
                <div className="cardContentWrap border-2 border-[#E25C3C] rounded-b-lg p-4">
                  <h4 className=" pb-2 text-2xl font-semibold">
                    Lorem ipsum dolor
                  </h4>
                  <p className=" text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos autem eum optio laboriosam adipisci? Odit ullam eum
                    dolores perferendis, beatae voluptates distinctio autem
                    placeat voluptate consectetur, eos aliquid. Tenetur,
                    facilis?
                  </p>
                  <div className="btnWrap pt-4 flex justify-start">
                    <a href="" className="btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* types of service */}

      {/* testimonials */}

      {/* call to action */}

      {/* footer */}
    </>
  );
}

export default TailwindPractice;
