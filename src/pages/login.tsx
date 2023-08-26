import React from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/",
          })
        }
        className="md:px-4 md:mt-0 mt-2 w-full md:py-2 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
