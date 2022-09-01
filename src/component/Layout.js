import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
