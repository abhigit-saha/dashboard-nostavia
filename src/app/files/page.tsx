import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex justify-between p-8">
        <div className="space-y-1 mb-12">
          <h1 className=" text-black text-[40px] font-bold">Files</h1>
          <div className=" text-[#696969] text-[20px]">
            Manage all the files
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              width={20}
              height={20}
              alt=""
              src="/Search.svg"
              className="absolute top-1/2 left-3 transform -translate-y-1/2"
            />
            <input
              className="h-[40px] w-[215px] rounded-full placeholder-gray-900 pl-10"
              type="text"
              placeholder="Search"
              style={{ textAlign: "left", color: "black" }}
            />
          </div>

          <select className="h-[40px] w-[156px] rounded-full pl-4 placeholder-gray-900">
            <option value="" disabled selected>
              Last Modified
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <select className="h-[40px] w-[106px] rounded-full pl-4 placeholder-gray-900">
            <option value="" disabled selected>
              All Files
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="relative pt-16 pl-10">
        <a href="/whiteboard" className="flex flex-row">
          <button className="h-[65px] w-[267px] bg-white rounded-2xl flex items-center justify-start space-x-3 px-4">
            <Image src="/Plus circle.svg" width={32} height={32} alt="" />
            <div className="font-bold">Upload a new file</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
