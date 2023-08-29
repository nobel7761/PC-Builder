import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsKeyboard } from "react-icons/bs";
import { MdPower, MdSdStorage } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { MemoryStick } from "lucide-react";
import { Button } from "@/shared/components/shadcn/button";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";
import Image from "next/image";

const BuildCard = ({ category }: { category: string }) => {
  const { pcBuild } = useAppSelector((state) => state.pcBuild);

  let iconToShow = null;

  if (category.toLowerCase() === "cpu") {
    iconToShow = pcBuild.cpu.image ? (
      <Image src={`/${pcBuild.cpu.image}`} alt="CPU" width={64} height={64} />
    ) : (
      <BsCpuFill />
    );
  } else if (category.toLowerCase() === "motherboard") {
    iconToShow = pcBuild.motherboard.image ? (
      <Image
        src={`/${pcBuild.motherboard.image}`}
        alt="motherboard"
        width={64}
        height={64}
      />
    ) : (
      <BsFillMotherboardFill />
    );
  } else if (category.toLowerCase() === "ram") {
    iconToShow = pcBuild.ram.image ? (
      <Image src={`/${pcBuild.ram.image}`} alt="ram" width={64} height={64} />
    ) : (
      <MemoryStick className="w-16 h-16" />
    );
  } else if (category.toLowerCase() === "power supply unit") {
    iconToShow = pcBuild.powerSupply.image ? (
      <Image
        src={`/${pcBuild.powerSupply.image}`}
        alt="powerSupply"
        width={64}
        height={64}
      />
    ) : (
      <MdPower />
    );
  } else if (category.toLowerCase() === "storage device") {
    iconToShow = pcBuild.storage.image ? (
      <Image
        src={`/${pcBuild.storage.image}`}
        alt="storage"
        width={64}
        height={64}
      />
    ) : (
      <MdSdStorage />
    );
  } else if (category.toLowerCase() === "monitor") {
    iconToShow = pcBuild.monitor.image ? (
      <Image
        src={`/${pcBuild.monitor.image}`}
        alt="monitor"
        width={64}
        height={64}
      />
    ) : (
      <PiMonitorFill />
    );
  } else if (category.toLowerCase() === "others") {
    iconToShow = pcBuild.others.image ? (
      <Image
        src={`/${pcBuild.others.image}`}
        alt="others"
        width={64}
        height={64}
      />
    ) : (
      <BsKeyboard />
    );
  }

  let productName = null;
  if (category.toLowerCase() === "cpu") {
    productName = pcBuild.cpu.title ? (
      <p>{pcBuild.cpu.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "motherboard") {
    productName = pcBuild.motherboard.title ? (
      <p>{pcBuild.motherboard.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "ram") {
    productName = pcBuild.ram.title ? (
      <p>{pcBuild.ram.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "power supply unit") {
    productName = pcBuild.powerSupply.title ? (
      <p>{pcBuild.powerSupply.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "storage device") {
    productName = pcBuild.storage.title ? (
      <p>{pcBuild.storage.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "monitor") {
    productName = pcBuild.monitor.title ? (
      <p>{pcBuild.monitor.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "others") {
    productName = pcBuild.others.title ? (
      <p>{pcBuild.others.title}</p>
    ) : (
      <p className="mt-2 animate-pulse bg-slate-300 md:w-96 w-40 h-4 rounded"></p>
    );
  }

  let price = null;
  if (category.toLowerCase() === "cpu") {
    price = pcBuild.cpu.price ? (
      <p>{pcBuild.cpu.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "motherboard") {
    price = pcBuild.motherboard.price ? (
      <p>{pcBuild.motherboard.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "ram") {
    price = pcBuild.ram.price ? (
      <p>{pcBuild.ram.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "power supply unit") {
    price = pcBuild.powerSupply.price ? (
      <p>{pcBuild.powerSupply.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "storage device") {
    price = pcBuild.storage.price ? (
      <p>{pcBuild.storage.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "monitor") {
    price = pcBuild.monitor.price ? (
      <p>{pcBuild.monitor.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  } else if (category.toLowerCase() === "others") {
    price = pcBuild.others.price ? (
      <p>{pcBuild.others.price}</p>
    ) : (
      <p className="animate-pulse bg-slate-300 md:w-20 w-12 md:h-8 h-4 rounded"></p>
    );
  }

  return (
    <div className="w-full flex justify-between items-center my-8 md:p-4 p-2  rounded-md hover:shadow-md hover:shadow-black border">
      <div className="flex gap-x-6">
        <div className="text-6xl">{iconToShow}</div>
        <div>
          <div className="font-bold md:text-xl text-base">{category}</div>
          <div className="md:text-base text-sm">{productName}</div>
        </div>
      </div>
      <div className="flex flex-col md:gap-y-4 gap-y-1  items-center">
        <div className="flex items-center md:text-2xl text-sm text-indigo-600 font-bold">
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
          <Button className="md:px-8 px-2 md:py-4 py-1">Choose</Button>
        </Link>
      </div>
    </div>
  );
};

export default BuildCard;
