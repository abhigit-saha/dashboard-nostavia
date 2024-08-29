"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function NotebookPage() {
  const router = useRouter();

  return (
    <div className="p-8">
      {/* Greeting Section */}
      <div className="flex justify-between gap-x-[62px]">
        <div className="space-y-1 mb-12">
          <div className="text-[40px] font-bold">AI Chatbot</div>
          <div className="text-[20px] text-gray-500">
            Chat with AI Chatbot for needs
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div>
            <button
              className="rounded-3xl w-[91px] h-[41px] bg-white text-black"
              onClick={() => router.push("/chat")}
            >
              Chat
            </button>
          </div>
          <div>
            <button className="rounded-3xl w-[138px] h-[41px] bg-[#C00F0C] text-white">
              Notebook
            </button>
          </div>
        </div>
      </div>

      {/* Notebook Content */}
      <div className="relative pt-8">
        <Link href="#">
          <Image
            className="absolute top-1/2 left-6"
            width={24}
            height={24}
            alt=""
            src="/Plus circle.svg"
          />
          <button className="h-[65px] w-[267px] bg-white rounded-2xl font-bold">
            New Notebook
          </button>
        </Link>
      </div>

      <div className="text-lg text-gray-500 pt-8">
        All Notebooks
        <div className="flex gap-8">
          <div className="relative pt-8">
            <Link href="#">
              <Image
                className="absolute top-[50px] left-6"
                width={24}
                height={24}
                alt=""
                src="/Book.svg"
              />
              <button className="h-[65px] w-[267px] bg-white rounded-2xl font-bold">
                Notebook 1
              </button>
            </Link>
          </div>
          <div className="relative pt-8">
            <Link href="#">
              <Image
                className="absolute top-[50px] left-6"
                width={24}
                height={24}
                alt=""
                src="/Book.svg"
              />
              <button className="h-[65px] w-[267px] bg-white rounded-2xl font-bold">
                Notebook 2
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotebookPage;
