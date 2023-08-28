import React from "react";
import BuildCard from "./BuildCard";

const PCBuild = ({ categories }: { categories: string[] }) => {
  return (
    <div className="my-6 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center">Build Your Own PC</h1>
      {categories.map((category, index) => (
        <BuildCard key={index} category={category}></BuildCard>
      ))}
    </div>
  );
};

export default PCBuild;
