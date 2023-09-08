"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const FullScreenBg = () => {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress);
  return (
    <>
      <motion.div
        className="w-full h-screen bloctrace bg-[url('/baraka/chambre-2.jpg')] "
        style={{ scale }}
      >
        <div className="container px-10 invert">
          <h1 className="pt-20 text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]">
            <span>All you</span>
            <span>-</span>
          </h1>
          <h1 className="text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]">
            need
          </h1>
          <motion.h1
            className="text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]"
            style={{ scale: scrollYProgress }}
          >
            <span>-</span>
            is code
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default FullScreenBg;
