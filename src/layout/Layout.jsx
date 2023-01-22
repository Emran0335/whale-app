import React from "react";
import '../style/layout.css';
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
