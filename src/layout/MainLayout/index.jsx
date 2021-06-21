import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
