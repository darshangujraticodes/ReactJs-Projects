import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function PageLayout() {
  const { lightThemeMode, setLightThemeMode } = useContext(ThemeContext);

  useEffect(() => {
    if (lightThemeMode) {
      document.documentElement.setAttribute("data-theme", "");
      localStorage.setItem("themeMode", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [lightThemeMode]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PageLayout;
