"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.7 }}
        variants={{
          initialState: { opacity: 0, y: 20 },
          animateState: { opacity: 1, y: 0 },
          exitState: { opacity: 0, y: 20 },
        }}
      >
        <p className="text-gray-400">AnimatedRoutes applied</p>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
