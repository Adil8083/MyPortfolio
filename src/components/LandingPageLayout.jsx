import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function LandingPageLayout() {
  let location = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-[url('/src/assets/concrete-textured-background.jpg')] bg-repeat">
      <ScrollToTop pathname={location} />
      <Header />
      <div className="h-24 w-full bg-black"></div>
      <div className="flex-1">
        <Outlet />
        {/* <Analytics /> */}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
