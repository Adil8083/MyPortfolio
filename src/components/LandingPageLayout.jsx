import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function LandingPageLayout() {
  return (
    <div className="h-[100dvh] bg-[url('/src/assets/concrete-textured-background.jpg')] bg-cover flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
