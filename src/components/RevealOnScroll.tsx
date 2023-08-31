"use client";
import { motion, useAnimation, easeIn, easeOut } from "framer-motion";

interface Props {
  // children, permet de recupérer l'élément à englober dans motion div
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const RevealOnScroll = ({ children, width = "fit-content" }: Props) => {
  //const slideControls = useAnimation();

  return (
    <div style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        animate={useAnimation()}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
