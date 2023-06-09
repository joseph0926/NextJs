import React, { Fragment } from "react";
import MainNavbar from "./MainNavbar";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavbar></MainNavbar>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
