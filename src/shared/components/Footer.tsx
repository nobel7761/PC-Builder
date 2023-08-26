import Link from "next/link";
import React from "react";
import { RiComputerFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="md:px-6 px-2 py-2 md:flex md:justify-between md:items-center bg-[#0F172A]">
      <Link
        href="/"
        className="flex md:gap-x-2 md:items-start items-center justify-center gap-x-2 text-white "
      >
        <RiComputerFill className="md:text-4xl text-xl" />
        <p className="md:text-2xl text-lg uppercase font-bold">PC Builder</p>
      </Link>

      <p className="text-white md:text-left text-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://www.linkedin.com/in/habibur-rahaman-nobel/"
          className="text-indigo-600"
          target="_blank"
        >
          Md. Habibur Rahaman
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
