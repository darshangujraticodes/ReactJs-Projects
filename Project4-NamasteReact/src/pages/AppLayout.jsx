import React from "react";
import HeaderSection from "../components/HeaderSection";
import BodySection from "../components/BodySection";
import FooterSection from "../components/FooterSection";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default AppLayout;
