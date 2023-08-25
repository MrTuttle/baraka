import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// "use client";

const animationWrapper = () => {
  return (
    <>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 10 }}
        variants={{
          initialState: { opacity: 0, y: 20 },
          animateState: { opacity: 1, y: 0 },
          exitState: { opacity: 0, y: 20 },
        }}
      >
        <h1 className="text-9xl pt-3.5 font-thin">Contact</h1>
      </motion.div>
    </>
  );
};

export default animationWrapper;
