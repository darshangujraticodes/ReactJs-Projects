import React from "react";
import logoImg from "../assets/swiggy/logo.png";
import "./componentStyles/navbarStyles.css";

function HeaderSection() {
  return (
    <>
      <nav className="navbarSection bg-white fixed top-0 right-0 left-0  z-50 mx-auto">
        <div className="container mx-auto">
          <div className="navbarWrap py-2">
            <div className="logoWrap">
              <a href="/">
                <img
                  src={logoImg}
                  className="w-[90px] cursor-pointer"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="menuWrap flex  items-center">
              <ul className="flex  items-center">
                <li className="px-4 cursor-pointer">
                  <a href="">
                    <span>
                      <i class="fa-solid fa-magnifying-glass pr-2"></i>
                    </span>
                    Search
                  </a>
                </li>
                <li className="px-4 cursor-pointer">
                  <a href="">
                    <span>
                      <i class="fa-solid fa-user pr-2"></i>
                    </span>
                    Sign In
                  </a>
                </li>
                <li className="px-4 cursor-pointer">
                  <a href="">
                    <span>
                      <i class="fa-solid fa-cart-shopping pr-2"></i>
                    </span>
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;
