import React from "react";
import Image from "next/image";

const FilesPage = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h1 className="text-black text-[40px] font-bold">Files</h1>
          <div className="text-[#696969] text-[20px]">Manage all the files</div>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <Image
              width={20}
              height={20}
              alt="Search icon"
              src="/Search.svg"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
            />
            <input
              className="h-[40px] w-[215px] rounded-full placeholder-gray-900 pl-10 bg-white"
              type="text"
              placeholder="Search"
              style={{ textAlign: "left", color: "black" }}
            />
          </div>
          <select className="h-[40px] w-[156px] rounded-full pl-4 placeholder-gray-900 bg-white">
            <option value="" disabled selected>
              Last Modified
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <select className="h-[40px] w-[106px] rounded-full pl-4 placeholder-gray-900 bg-white">
            <option value="" disabled selected>
              All Files
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="relative pt-16">
        <a href="/whiteboard" className="flex flex-row">
          <button className="h-[65px] w-[267px] bg-white rounded-2xl flex items-center justify-start space-x-3 px-4">
            <Image src="/Plus circle.svg" width={32} height={32} alt="" />
            <div className="font-bold">Add a new File</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default FilesPage;
