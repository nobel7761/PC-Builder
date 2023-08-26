import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const CpuPage = () => {
  return (
    <div>
      <h1>CpuPage</h1>
    </div>
  );
};

export default CpuPage;

CpuPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
