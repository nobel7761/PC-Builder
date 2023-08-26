import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const PowerSupplyPageUnit = () => {
  return (
    <div>
      <h1>PowerSupplyPageUnit</h1>
    </div>
  );
};

export default PowerSupplyPageUnit;

PowerSupplyPageUnit.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);
