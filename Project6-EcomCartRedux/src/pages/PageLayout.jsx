import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default PageLayout;
