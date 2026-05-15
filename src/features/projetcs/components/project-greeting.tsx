import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hey there! 👋 Thanks for checking out my work.",
  "Welcome! Feel free to explore what I've built. ☕",
  "Hi! Each project here tells a story. Let me show you. ✨",
  "Glad you're here! Let's dive into my portfolio. 🚀",
];

const tips = [
  "💡 Tip: Click on any project card to see the full details!",
  "💡 Tip: Each project has a live demo link — try them out!",
  "💡 Tip: Hover over the cards for a quick peek.",
];

const ProjectGreeting: React.FC = () => {
  const [greeting, setGreeting] = useState("");
  const [tip, setTip] = useState("");
  const [typedText, setTypedText] = useState("");
  const [showTip, setShowTip] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Pick random greeting and tip
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!greeting) return;
    let i = 0;
    setTypedText("");
    setIsTypingDone(false);

    const interval = setInterval(() => {
      if (i < greeting.length) {
        setTypedText(greeting.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
        // Show tip after greeting finishes
        setTimeout(() => setShowTip(true), 600);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [greeting]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-xl border border-blue-200/50 bg-blue-50/50 p-5 backdrop-blur-sm dark:border-blue-500/20 dark:bg-blue-950/20"
    >
      <div className="flex items-start gap-3">
        {/* Terminal-style prompt */}
        <div className="mt-0.5 flex items-center gap-1.5 shrink-0">
          <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
        </div>

        <div className="min-h-[3rem]">
          <p className="font-mono text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <span className="text-blue-600 dark:text-blue-400 font-semibold select-none">
              ~/adib{" "}
            </span>
            <span className="text-green-600 dark:text-green-400 select-none">
              ${" "}
            </span>
            {typedText}
            {!isTypingDone && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-blue-600 dark:bg-blue-400 ml-0.5 align-middle"
              />
            )}
          </p>

          <AnimatePresence>
            {showTip && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-500"
              >
                {tip}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectGreeting;
