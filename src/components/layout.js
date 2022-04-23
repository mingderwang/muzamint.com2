import React from "react";
import { Header } from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <div class="flex flex-wrap">{children}</div>
      </div>
    </>
  );
};

export default Layout;
