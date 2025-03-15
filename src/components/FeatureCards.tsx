"use client";

import type React from "react";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Database, Code, Brain, BarChart3 } from "lucide-react";

// Feature card component with animations
const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <motion.div
      className="flex flex-col items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 w-full max-w-sm hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileTap={{ scale: 0.98 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-3 mb-4 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
};

export default function FeatureSection() {
  // Reference for the section
  const sectionRef = useRef<HTMLElement>(null);

  // Features data with icons
  const features = [
    {
      icon: <Zap size={24} />,
      title: "AI-Powered Component Logic Generation",
      desc: "AI generates complete component logic from natural language prompts.",
    },
    {
      icon: <Brain size={24} />,
      title: "Gemini AI",
      desc: "Powerful code generation with Google Gemini's AI",
    },
    {
      icon: <Database size={24} />,
      title: "Data Integration",
      desc: "Connect to Firebase/Supabase with simple prompts",
    },
    {
      icon: <Code size={24} />,
      title: "Codebase Context",
      desc: "AI uses your codebase for tailored code generation.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "DevTools",
      desc: "Monitor AI-generated components with detailed tools, tracking requests, model reasoning, and ensuring smooth development.",
    },
  ];

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Discover
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="block">What&apos;s in</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Intelligent React Components
            </span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
