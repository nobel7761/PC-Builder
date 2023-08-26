import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import React, { ReactElement } from "react";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
