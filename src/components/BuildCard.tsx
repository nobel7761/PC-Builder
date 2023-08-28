import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsKeyboard } from "react-icons/bs";
import { MdPower, MdSdStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { MemoryStick } from "lucide-react";
import { Button } from "@/shared/components/shadcn/button";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";

const BuildCard = ({ category }: { category: string }) => {
  const { pcBuild } = useAppSelector((state) => state.pcBuild);

  let iconToShow = null;

  if (category.toLowerCase() === "cpu") {
    iconToShow = pcBuild.cpu.image ? (
      <img src={pcBuild.cpu.image} alt="CPU" className="w-16 h-16" />
    ) : (
      <BsCpuFill />
    );
  } else if (category.toLowerCase() === "motherboard") {
    iconToShow = pcBuild.motherboard.image ? (
      <img
        src={pcBuild.motherboard.image}
        alt="motherboard"
        className="w-16 h-16"
      />
    ) : (
      <BsFillMotherboardFill />
    );
  } else if (category.toLowerCase() === "ram") {
    iconToShow = pcBuild.ram.image ? (
      <img src={pcBuild.ram.image} alt="ram" className="w-16 h-16" />
    ) : (
      <MemoryStick className="w-16 h-16" />
    );
  } else if (category.toLowerCase() === "power supply unit") {
    iconToShow = pcBuild.powerSupply.image ? (
      <img
        src={pcBuild.powerSupply.image}
        alt="powerSupply"
        className="w-16 h-16"
      />
    ) : (
      <MdPower />
    );
  } else if (category.toLowerCase() === "storage device") {
    iconToShow = pcBuild.storage.image ? (
      <img src={pcBuild.storage.image} alt="storage" className="w-16 h-16" />
    ) : (
      <MdSdStorage />
    );
  } else if (category.toLowerCase() === "monitor") {
    iconToShow = pcBuild.monitor.image ? (
      <img src={pcBuild.monitor.image} alt="monitor" className="w-16 h-16" />
    ) : (
      <PiMonitorFill />
    );
  } else if (category.toLowerCase() === "others") {
    iconToShow = pcBuild.others.image ? (
      <img src={pcBuild.others.image} alt="others" className="w-16 h-16" />
    ) : (
      <BsKeyboard />
    );
  }

  let productName = null;
  if (category.toLowerCase() === "cpu") {
    productName = pcBuild.cpu.title ? (
      <p>{pcBuild.cpu.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "motherboard") {
    productName = pcBuild.motherboard.title ? (
      <p>{pcBuild.motherboard.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "ram") {
    productName = pcBuild.ram.title ? (
      <p>{pcBuild.ram.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "power supply unit") {
    productName = pcBuild.powerSupply.title ? (
      <p>{pcBuild.powerSupply.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "storage device") {
    productName = pcBuild.storage.title ? (
      <p>{pcBuild.storage.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "monitor") {
    productName = pcBuild.monitor.title ? (
      <p>{pcBuild.monitor.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "others") {
    productName = pcBuild.others.title ? (
      <p>{pcBuild.others.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 w-96 h-4 rounded"></p>
    );
  }

  let price = null;
  if (category.toLowerCase() === "cpu") {
    price = pcBuild.cpu.price ? (
      <p>{pcBuild.cpu.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "motherboard") {
    price = pcBuild.motherboard.price ? (
      <p>{pcBuild.motherboard.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "ram") {
    price = pcBuild.ram.price ? (
      <p>{pcBuild.ram.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "power supply unit") {
    price = pcBuild.powerSupply.price ? (
      <p>{pcBuild.powerSupply.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "storage device") {
    price = pcBuild.storage.price ? (
      <p>{pcBuild.storage.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "monitor") {
    price = pcBuild.monitor.price ? (
      <p>{pcBuild.monitor.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  } else if (category.toLowerCase() === "others") {
    price = pcBuild.others.price ? (
      <p>{pcBuild.others.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 w-20 h-8 rounded"></p>
    );
  }

  return (
    <div className="w-full flex justify-between items-center my-8 p-4  rounded-md hover:shadow-md hover:shadow-black border">
      <div className="flex gap-x-6">
        <div className="text-6xl">{iconToShow}</div>
        <div>
          <div className="font-bold text-xl">{category}</div>
          <div>{productName}</div>
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <div className="flex items-center text-2xl text-indigo-600 font-bold">
          {price}
        </div>
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
          <Button>Choose</Button>
        </Link>
      </div>
    </div>
  );
};

export default BuildCard;
