"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Demo data
const demo = [
  {
    title: "AIButton",
    example: "Create a 'Submit' button with a loading spinner.",
  },
  {
    title: "AIButton",
    example: "Design a button to open a custom modal.",
  },
  {
    title: "AIInput",
    example: "Implement real-time input validation.",
  },
  {
    title: "AIInput",
    example: "Create a password input with visibility toggle.",
  },
  {
    title: "AIForm",
    example: "Generate a multi-step profile setup form.",
  },
  {
    title: "AIForm",
    example: "Build a dynamic form from API data.",
  },
];
// Typing animation component
const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50 + Math.random() * 30); // Random typing speed for realism

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-lg md:text-xl relative">
      {displayedText}
      <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse"></span>
    </div>
  );
};

export default function PromptShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle auto rotation
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % demo.length);
      }, 6000); // Change every 6 seconds
    }

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + demo.length) % demo.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % demo.length);
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Floating particles effect */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0.2 + Math.random() * 0.5,
          }}
          animate={{
            y: [null, "-20%"],
            opacity: [null, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2 + Math.random() * 8,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl w-full px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2 bg-primary/20 px-3 py-1 rounded-full">
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-xs font-semibold tracking-wider text-primary">
                    {demo[currentIndex].title}
                  </span>
                </div>
              </div>

              <div className="h-16 flex items-center">
                <TypingAnimation text={demo[currentIndex].example} />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  Prompt-driven components
                </div>
                <div className="flex space-x-2">
                  {demo.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "bg-primary w-4"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to example ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:bg-gray-700/50 transition-colors"
        aria-label="Previous example"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:bg-gray-700/50 transition-colors"
        aria-label="Next example"
      >
        <ChevronRight size={20} />
      </button>

      {/* Code-like background elements for decoration */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
}
