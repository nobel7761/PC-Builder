import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsKeyboard } from "react-icons/bs";
import { MdPower, MdSdStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { MemoryStick } from "lucide-react";
import { Button } from "@/shared/components/shadcn/button";
import { useAppSelector } from "@/redux/hook";

const BuildCard = ({ category }: { category: string }) => {
  const { pcBuild } = useAppSelector((state) => state.buildPC);
  console.log("state", pcBuild);
  return (
    <div className="w-full flex justify-between items-center my-8 p-4  rounded-md hover:shadow-md hover:shadow-black border">
      <div className="flex gap-x-6">
        <div className="text-6xl">
          {category.toLowerCase() === "cpu" && <BsCpuFill />}
          {category.toLowerCase() === "motherboard" && (
            <BsFillMotherboardFill />
          )}
          {category.toLowerCase() === "ram" && (
            <MemoryStick className="w-16 h-16" />
          )}
          {category.toLowerCase() === "power supply unit" && <MdPower />}
          {category.toLowerCase() === "storage device" && <MdSdStorage />}
          {category.toLowerCase() === "monitor" && <PiMonitorFill />}
          {category.toLowerCase() === "others" && <BsKeyboard />}
        </div>
        <div>
          <p className="font-bold text-xl">{category}</p>
          <p>product name</p>
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <p>price</p>
        <Button>Choose</Button>
      </div>
    </div>
  );
};

export default BuildCard;
