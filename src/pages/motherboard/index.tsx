import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const MotherBoardPage = () => {
  return (
    <div>
      <h1>MotherBoardPage</h1>
    </div>
  );
};

export default MotherBoardPage;

MotherBoardPage.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);
