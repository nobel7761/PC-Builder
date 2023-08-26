import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const RamPage = () => {
  return (
    <div>
      <h1>RamPage</h1>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
