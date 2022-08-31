import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
