import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/shadcn/card";
import { signIn } from "next-auth/react";
import { RiComputerFill } from "react-icons/ri";
import { Button } from "@/shared/components/shadcn/button";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#111827]">
      <div className="flex items-center w-3/4">
        <Card className="w-1/2 h-fit bg-[#1F2937] border-none text-white">
          <CardHeader className="flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <RiComputerFill className="text-6xl" />
              <p className="text-[#1ABC9C] text-5xl uppercase font-bold">
                PC Builder APP
              </p>
            </div>
            <div className="space-y-2">
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription className="text-base flex gap-x-2 text-[#D1D5DB]">
                Start your website in seconds. Log in with:
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className="md:px-4 md:mt-0 mt-2 w-full md:py-2 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Github Login
            </Button>
          </CardContent>
        </Card>
        <div className="w-1/2 flex justify-end">
          <Image src="/login.svg" alt="logo-login" width={500} height={300} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
