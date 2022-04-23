import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Header } from "./header";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <div className="flex">
        <div class="flex flex-wrap">{children}</div>
      </div>
    </>
  );
};

export default Layout;
