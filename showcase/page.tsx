"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CopyIcon } from "lucide-react";
import BackgroundAnimation from "@/components/playground-background-animation";
import BrowserWindow from "@/components/browser-window";
import MiniAppTodo from "./_mini_applications/todos";
import JSONViewer from "@/components/JSONViewer";
import { Image } from "nextra/components";
import { AIButton } from "intelligent-react-components";
import { UnionType } from "@/utils/utils";

export default function ShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentJSON, setCurrentJSON] = useState<UnionType>(null);

  // This array will contain your showcase windows
  // You can replace the placeholder content with your React library components
  const showcaseItems = [
    {
      id: 1,
      title: "Todo list",
      content: <MiniAppTodo setJSON={setCurrentJSON} />,
    },
    {
      id: 2,
      title: "Component Demo 2",
      content: <div className="bg-white h-full w-full"></div>,
    },
    {
      id: 3,
      title: "Component Demo 3",
      content: (
        <div className="bg-white h-full w-full">
          {/* Your library component will go here */}
          <AIButton
            filename="sayCongrats"
            listener="onClick"
            prompt="Upon click, Console Congrats and create a pop party in the DOM."
          />
        </div>
      ),
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? showcaseItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === showcaseItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background */}
      <BackgroundAnimation />
      {currentJSON && (
        <div className=" fixed w-full max-w-[400px] h-full top-0 right-0 z-30 bg-white rounded-l p-2 overflow-y-auto">
          <h1 className="text-black font-bold">Input JSON</h1>
          <div className="flex justify-end gap-2 my-1">
            <CopyIcon className=" text-black" />
            <Image
              src="/cross-icon.svg"
              alt="hide"
              className="w-[20px] aspect-square"
              onClick={() => setCurrentJSON(null)}
            />
          </div>
          <JSONViewer props={currentJSON} />
        </div>
      )}

      {/* Main content container with padding */}
      <div className="relative z-10 min-h-screen w-full p-4 md:p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col h-[90vh]">
          {/* Navigation controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white"
                aria-label="Previous showcase item"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white"
                aria-label="Next showcase item"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination indicators */}
            <div className="flex gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to showcase item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Browser windows container - takes up most of the space */}
          <div className="relative flex-1">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-500 absolute inset-0 h-full ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
              >
                <BrowserWindow title={item.title}>{item.content}</BrowserWindow>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
