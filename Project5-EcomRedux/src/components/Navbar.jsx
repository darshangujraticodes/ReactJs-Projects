import React, { useContext } from "react";
import whiteLogo from "../assets/white-bg-logo.svg";
import blackLogo from "../assets/black-bg-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

function Navbar() {
  const { setLightThemeMode, lightThemeMode } = useContext(ThemeContext);

  return (
    <div className="navbarWrapper my-4">
      <div className="container">
        <nav className="d-flex   justify-content-between  ">
          <div className="logowrap">
            {lightThemeMode ? (
              <img src={whiteLogo} alt="" />
            ) : (
              <img src={blackLogo} alt="" />
            )}
          </div>

          <div className="d-flex  align-items-center">
            <div className="d-flex gap-4 align-items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `  lightModeLink  ${
                    isActive ? `textRedPink ` : ` textDarkBlack `
                  }   `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `  lightModeLink  ${
                    isActive ? `textRedPink ` : ` textDarkBlack `
                  }   `
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `  lightModeLink  ${
                    isActive ? `textRedPink ` : ` textDarkBlack `
                  }   `
                }
              >
                Contact
              </NavLink>

              <button
                onClick={() => setLightThemeMode(!lightThemeMode)}
                className="themeBtn"
              >
                <span className="themeIcon">
                  {lightThemeMode ? (
                    <img src={moon} alt="" />
                  ) : (
                    <img src={sun} alt="" />
                  )}
                </span>
                <span className="ms-2">
                  {lightThemeMode ? "Dark" : "Light"}
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
