"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Copy, Check, Sparkles, Zap, Code, Braces } from "lucide-react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const controls = useAnimation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm i irc");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Track mouse position for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the title on load
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  // Words for the typing effect
  const words = ["Generate", "Command", "Create", "Refine"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic spotlight effect */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-opacity duration-500"
        style={{
          opacity: isHovering ? 0.97 : 1,
        }}
      />

      {isHovering && (
        <div
          className="absolute bg-gradient-radial from-primary/20 to-transparent w-[40vw] h-[40vw] rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: cursorPosition.x - 300,
            top: cursorPosition.y - 300,
            opacity: 0.7,
          }}
        />
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4">
        {/* Subtitle above title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Development
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-bold text-5xl sm:text-6xl md:text-8xl text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <motion.span
            className="bg-gradient-to-r from-[#489EEC] to-[#61DAFB] inline-block text-transparent bg-clip-text"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            React
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            , Prompted
          </motion.span>
        </motion.h1>

        {/* Animated tagline */}
        <motion.h3
          className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span>Describe.</span>
          <div className="relative py-3 text-white dark:text-black bg-gradient-to-br from-[#489EEC] to-[#61DAFB] px-3 rounded-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-primary inline-block min-w-32 text-center"
              >
                {words[currentWordIndex]}.
              </motion.span>
            </AnimatePresence>
          </div>
          <span>Run.</span>
        </motion.h3>

        {/* Install command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#61DAFB] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-lg">
            <code
              className="font-mono text-lg px-8 py-3.5 flex items-center gap-2"
              onClick={copyToClipboard}
            >
              <span className="text-primary">$</span> npm i irc
              <button
                className="ml-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={copied ? "Copied!" : "Copy to clipboard"}
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy
                    size={16}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  />
                )}
              </button>
            </code>
          </div>
        </motion.div>

        {/* Features list */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { icon: <Zap size={14} />, text: "Gemini API's Powered" },
            { icon: <Code size={14} />, text: "Prompt-Driven" },
            { icon: <Braces size={14} />, text: "Type-Safe" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100/50 to-transparent dark:from-gray-900/50 pointer-events-none" />

      {/* Animated rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[800, 600, 400].map((size, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + index * 5,
              delay: index * 0.2,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            style={{
              x: "-50%",
              y: "-50%",
              width: `${size}px`,
              height: `${size}px`,
              border: `1px solid rgba(72, 158, 236, ${0.05 + index * 0.05})`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
