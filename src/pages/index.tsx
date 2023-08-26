import RootLayout from "@/layout/RootLayout";
import React, { ReactElement } from "react";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="bg-red-500">home</h1>
      {session && <p>{session?.user?.name}</p>}
    </div>
  );
};

export default HomePage;

HomePage.getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>;
