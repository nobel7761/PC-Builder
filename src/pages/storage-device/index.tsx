import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";

const StorageDevice = () => {
  return (
    <div>
      <h1>StorageDevice</h1>
    </div>
  );
};

export default StorageDevice;

StorageDevice.getLayout = (page: ReactElement) => (
  <RootLayout>{page}</RootLayout>
);
