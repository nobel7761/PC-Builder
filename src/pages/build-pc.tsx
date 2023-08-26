import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const BuildPC = () => {
  return (
    <div>
      <h1>building pc</h1>
    </div>
  );
};

export default BuildPC;

BuildPC.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
