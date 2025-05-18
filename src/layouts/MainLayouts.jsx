import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../components/ScrollToTop";

export const MainLayouts = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
