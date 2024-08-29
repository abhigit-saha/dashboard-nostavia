import React from "react";
import Image from "next/image";

const AIToolsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-start p-8">
        <div className="space-y-1">
          <div className="text-black text-[40px] font-bold">AI Tools</div>
          <div className="text-[20px] text-[#696969]">
            A small description of AI Tools
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Image
              width={20}
              height={20}
              alt="Search icon"
              src="/Search.svg"
              className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10"
            />
            <input
              className="h-[40px] w-[255px] rounded-full placeholder-gray-900 pl-10 bg-white"
              type="text"
              placeholder="Search"
              style={{ color: "black" }}
            />
          </div>
          <select className="h-[40px] w-[156px] rounded-full ml-4 pl-4 placeholder-gray-900 bg-white">
            <option value="" disabled selected>
              Most Popular
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
