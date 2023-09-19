import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
function LandingPageLayout() {
  let location = useLocation();
  return (
    <div className="bg-[url('/src/assets/concrete-textured-background.jpg')] bg-repeat flex flex-col min-h-screen">
      <ScrollToTop pathname={location} />
      <Header />
      <div className="h-24 bg-black w-full"></div>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
