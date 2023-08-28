import React from "react";
import BuildCard from "./BuildCard";
import { useAppSelector } from "@/redux/hook";
import { Button } from "@/shared/components/shadcn/button";
import toast, { Toaster } from "react-hot-toast";

const PCBuild = ({ categories }: { categories: string[] }) => {
  const { pcBuild } = useAppSelector((state) => state.pcBuild);

  const total =
    pcBuild.cpu.price +
    pcBuild.motherboard.price +
    pcBuild.ram.price +
    pcBuild.monitor.price +
    pcBuild.powerSupply.price +
    pcBuild.storage.price +
    pcBuild.others.price;

  let buttonDisabled = true;

  if (pcBuild.cpu.price) {
    if (pcBuild.motherboard.price) {
      if (pcBuild.ram.price) {
        if (pcBuild.monitor.price) {
          if (pcBuild.powerSupply.price) {
            if (pcBuild.storage.price) {
              if (pcBuild.others.price) {
                buttonDisabled = false;
              }
            }
          }
        }
      }
    }
  }

  return (
    <div className="my-6 w-11/12 mx-auto">
      <Toaster />
      <h1 className="text-4xl font-bold text-center">Build Your Own PC</h1>

      <p className="text-center font-bold text-indigo-600 text-2xl">
        Total: {total.toFixed(2)}
      </p>

      {categories.map((category, index) => (
        <BuildCard key={index} category={category}></BuildCard>
      ))}

      <div className="flex justify-end">
        <Button
          disabled={buttonDisabled}
          className="bg-indigo-600 md:w-1/6 w-full"
          onClick={() => {
            toast.success("PC Build Successful!");
          }}
        >
          Build PC
        </Button>
      </div>
    </div>
  );
};

export default PCBuild;
