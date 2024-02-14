import React from "react";
import nike_logo from "../assets/nike_brand_logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper py-5 px-3 bg-white shadow-lg w-full sticky top-0 z-30">
        <div className="container-section">
          <nav className="flex justify-between ">
            <div className="logo-wrapper">
              <img src={nike_logo} alt="Nike Logo" />
            </div>
            <div className="menu-link-wrap hidden md:block">
              <ul className=" flex uppercase text-lg font-semibold">
                <li className="my-2 mx-3">
                  <a href="">Menu</a>
                </li>
                <li className="my-2 mx-3">
                  <a href="">Location</a>
                </li>
                <li className="my-2 mx-3">
                  <a href="">About</a>
                </li>
                <li className="my-2 mx-3">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbtn-wrap">
              <ul className="flex text-lg font-semibold">
                <li>
                  <a href="" className="m-2 nav-btn">
                    Login
                  </a>
                </li>

                <li>
                  <a href="" className="m-2 toggle-btn">
                    <span>
                      <i class="fa-solid fa-bars"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
