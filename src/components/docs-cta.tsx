"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Code, Lightbulb } from "lucide-react";

export default function DocsCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>

      <motion.div
        className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container relative mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
              <Lightbulb size={14} className="text-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary">
                DEVELOPER RESOURCES
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to build with{" "}
              <span className="text-primary">AI-powered</span> components?
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Our comprehensive documentation provides everything you need to
              get started with intelligent React components. From basic usage to
              advanced customization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/docs">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center w-full justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                >
                  <span className=" text-black dark:text-white w-full">
                    Explore Documentation
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm font-medium hover:bg-white dark:hover:bg-gray-800 transition-all"
              >
                <Code className="mr-2 h-4 w-4" />
                <Link href="/examples">
                  <span>View Examples</span>
                </Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Right side: Visual element */}
          <motion.div
            className="relative w-full overflow-x-auto overflow-y-hidden sm:overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 flex items-center space-x-2">
                  <FileText size={14} className="text-primary" />
                  <span className="text-xs font-medium">Documentation.mdx</span>
                </div>
              </div>

              <pre className="font-mono text-sm overflow-x-auto">
                <code className="block space-y-3">
                  <div className="text-gray-800 dark:text-gray-200">
                    <span className="text-purple-600 dark:text-purple-400">
                      import
                    </span>{" "}
                    {"{ AIButton }"}{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      from
                    </span>{" "}
                    <span className="text-green-600 dark:text-green-400">
                      irc
                    </span>
                  </div>

                  <div className="text-gray-500 dark:text-gray-400">
                    {"// Create a button with AI-powered functionality"}
                  </div>

                  <div className="text-gray-800 dark:text-gray-200">
                    <span className="text-purple-600 dark:text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      MyComponent
                    </span>{" "}
                    {"= () => {"}
                  </div>

                  <div className="pl-4 text-gray-800 dark:text-gray-200">
                    <span className="text-purple-600 dark:text-purple-400">
                      return
                    </span>{" "}
                    {"("}
                  </div>

                  <div className="pl-8 text-gray-800 dark:text-gray-200">
                    {"<"}
                    <span className="text-blue-600 dark:text-blue-400">
                      AIButton
                    </span>
                  </div>

                  <div className="pl-12 text-gray-800 dark:text-gray-200">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      prompt
                    </span>
                    ={'"Upload files to Firebase"'}
                  </div>

                  <div className="pl-12 text-gray-800 dark:text-gray-200">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      filename
                    </span>
                    ={'"uploadToFirebase"'}
                  </div>

                  <div className="pl-8 text-gray-800 dark:text-gray-200">
                    {"/>"}
                  </div>

                  <div className="pl-4 text-gray-800 dark:text-gray-200">
                    {")"}
                  </div>

                  <div className="text-gray-800 dark:text-gray-200">{"}"}</div>
                </code>
              </pre>

              {/* Code highlight effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-secondary/10 rounded-lg blur-xl"></div>
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
