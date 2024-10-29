import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbarSection">
        <div className="container">
          <nav className="d-flex my-3 justify-content-between align-items-center gap-4">
            <div className="logoWrap">
              <Link to="">
                <img src={logo} className="logo" alt="" />
              </Link>
            </div>

            <div className="d-flex gao-3">
              <NavLink
                className={({ isActive }) =>
                  `  linkData ${isActive ? " pinkText " : ""}  `
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `  linkData ${isActive ? " pinkText " : ""}  `
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `  linkData ${isActive ? " pinkText " : ""}  `
                }
                to="cart"
              >
                Cart
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
