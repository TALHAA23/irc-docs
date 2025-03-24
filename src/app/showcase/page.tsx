"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundAnimation from "@/components/playground-background-animation";
import BrowserWindow from "@/components/browser-window";
import { AIButton } from "intelligent-react-components";
export default function ShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This array will contain your showcase windows
  // You can replace the placeholder content with your React library components
  const showcaseItems = [
    {
      id: 1,
      title: "Component Demo 1",
      content: (
        <div className="bg-white h-full w-full text-black p-3">
          <h1 className="text-8xl">
            <AIButton
              prompt="greet upon click"
              filename="greet"
              listener="onClick"
            />
          </h1>
        </div>
      ),
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
