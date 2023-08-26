import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const MonitorPage = () => {
  return (
    <div>
      <h1>MonitorPage</h1>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
