import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-between items-start ">
          <div className="space-y-1">
            <h1 className="text-black text-[40px] font-bold">Whiteboards</h1>
            <div className="text-[#696969] text-[20px]">
              Create a whiteboard for you
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                className="absolute top-1/2 transform -translate-y-1/2 left-3"
                src="/Search.svg"
                width={20}
                height={20}
                alt=""
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

            <div className="relative">
              <Image
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                src="/Plus.svg"
                width={20}
                height={20}
                alt=""
              />
              <button className="h-[40px] w-[155px] rounded-full pl-6 bg-white text-gray-900">
                Create Folder
              </button>
            </div>
          </div>
        </div>
        <div className="relative pt-16">
          <a href="/whiteboard" className="flex flex-row">
            <button className="h-[65px] w-[267px] bg-white rounded-2xl flex items-center justify-start space-x-3 px-4">
              <Image src="/Plus circle.svg" width={32} height={32} alt="" />
              <div className="font-bold">New Whiteboard</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
