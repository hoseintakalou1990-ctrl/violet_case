import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ cartCount }) => {
  return (
    <div>
      <Header cartCount={cartCount} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;