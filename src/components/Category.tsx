import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsKeyboard } from "react-icons/bs";
import { MdPower, MdSdStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { MemoryStick } from "lucide-react";
import Link from "next/link";

const Category = ({ category }: { category: string }) => {
  return (
    <Link
      href={
        category.toLowerCase() === "cpu"
          ? "/cpu"
          : category.toLowerCase() === "motherboard"
          ? "/motherboard"
          : category.toLowerCase() === "ram"
          ? "/ram"
          : category.toLowerCase() === "power supply unit"
          ? "/power-supply-unit"
          : category.toLowerCase() === "storage device"
          ? "/storage-device"
          : category.toLowerCase() === "monitor"
          ? "/monitor"
          : "/others"
      }
    >
      <div className="rounded-md shadow-black shadow-lg flex gap-x-2 px-4 py-2 items-center hover:shadow-xl hover:shadow-black">
        <div className="w-1/4 text-6xl">
          {category.toLowerCase() === "cpu" ? (
            <BsCpuFill />
          ) : category.toLowerCase() === "motherboard" ? (
            <BsFillMotherboardFill />
          ) : category.toLowerCase() === "ram" ? (
            <MemoryStick className="w-16 h-16" />
          ) : category.toLowerCase() === "power supply unit" ? (
            <MdPower />
          ) : category.toLowerCase() === "storage device" ? (
            <MdSdStorage />
          ) : category.toLowerCase() === "monitor" ? (
            <PiMonitorFill />
          ) : (
            <BsKeyboard />
          )}
        </div>

        <p className="uppercase font-bold">{category}</p>
      </div>
    </Link>
  );
};

export default Category;
