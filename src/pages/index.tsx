import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { useSession } from "next-auth/react";
import Banner from "@/components/Banner/Banner";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Banner />
      {session && <p>{session?.user?.name}</p>}
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
