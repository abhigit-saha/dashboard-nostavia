"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ChatHistoryArea from "@/components/ChatHistoryArea";
import MedhaTextArea from "@/components/MedhaTextArea";

function ChatPage() {
  const router = useRouter();

  const handleButtonClick = (buttonType) => {
    if (buttonType === "chat") {
      router.push("/chat");
    } else if (buttonType === "notebook") {
      router.push("/notebook");
    }
  };

  return (
    <div>
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
                className="rounded-3xl w-[91px] h-[41px] bg-[#C00F0C] text-white"
                onClick={() => handleButtonClick("chat")}
              >
                Chat
              </button>
            </div>
            <div>
              <button
                className="rounded-3xl w-[138px] h-[41px] bg-white text-black"
                onClick={() => handleButtonClick("notebook")}
              >
                Notebook
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6">
          <div className="col-span-1 h-full">
            <ChatHistoryArea
              questions={["What is Medha?", "What is Nostavia?"]}
            />
          </div>
          <div className="col-span-2">
            <MedhaTextArea
              qna={[
                {
                  question: "What is Medha?",
                  answer: "Medha is an AI Chatbot",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
