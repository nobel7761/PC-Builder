import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const OthersPage = () => {
  return (
    <div>
      <h1>OthersPage</h1>
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
