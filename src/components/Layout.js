/** @format */

import React from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";
import SelectLang from "./select-lang/SelectLang";

const Layout = () => {
  return (
    <>
      <Header />
      <SelectLang />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
