import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="bg-red-500">home</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
