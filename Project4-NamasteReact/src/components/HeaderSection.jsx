import React from "react";
import logoImg from "../assets/swiggy/logo.png";
import "./componentStyles/navbarStyles.css";
import { NavLink, Link } from "react-router-dom";

function HeaderSection() {
  return (
    <>
      <nav className="navbarSection bg-white fixed top-0 right-0 left-0  z-50 mx-auto">
        <div className="container mx-auto">
          <div className="navbarWrap py-2">
            <div className="logoWrap">
              <Link to="/">
                <img
                  src={logoImg}
                  className="w-[90px] cursor-pointer"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="menuWrap flex  items-center">
              <ul className="flex  items-center">
                <li className="px-4 cursor-pointer  ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      ` hover:text-[#ff5200]  ${
                        isActive ? "text-[#ff5200]" : "text-black"
                      }   `
                    }
                  >
                    <span>
                      {/* <i className="fa-solid fa-utensils pr-2"></i> */}
                      <i className="fa-solid fa-pizza-slice pl-2 rotate-180"></i>
                    </span>
                    Home
                  </NavLink>
                </li>
                <li className="px-4 cursor-pointer  ">
                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      ` hover:text-[#ff5200]  ${
                        isActive ? "text-[#ff5200]" : "text-black"
                      }   `
                    }
                  >
                    <span>
                      <i className="fa-solid fa-magnifying-glass pr-2"></i>
                    </span>
                    Search
                  </NavLink>
                </li>
                <li className="px-4 cursor-pointer">
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      ` hover:text-[#ff5200]  ${
                        isActive ? "text-[#ff5200]" : "text-black"
                      }   `
                    }
                  >
                    <span>
                      <i className="fa-solid fa-circle-question pr-2"></i>
                    </span>
                    FAQ
                  </NavLink>
                </li>
                <li className="px-4 cursor-pointer">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      ` hover:text-[#ff5200]  ${
                        isActive ? "text-[#ff5200]" : "text-black"
                      }   `
                    }
                  >
                    <span>
                      <i className="fa-solid fa-user pr-2"></i>
                    </span>
                    Sign In
                  </NavLink>
                </li>
                <li className="px-4 cursor-pointer">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      ` hover:text-[#ff5200]  ${
                        isActive ? "text-[#ff5200]" : "text-black"
                      }   `
                    }
                  >
                    <span>
                      <i className="fa-solid fa-cart-shopping pr-2"></i>
                    </span>
                    Cart
                  </NavLink>
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
