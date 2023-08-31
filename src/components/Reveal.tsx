"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  // to launch animation
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    // console.log(isInview);
    // console to see if view is true or false on scroll
    if (isInview) {
      // launch animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          backgroundColor: "rgb(255, 247, 0)",
          zIndex: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
