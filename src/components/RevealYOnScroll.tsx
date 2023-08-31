"use client";
import {
  motion,
  useAnimation,
  easeIn,
  easeOut,
  easeInOut,
} from "framer-motion";

interface Props {
  // children, permet de recupérer l'élément à englober dans motion div
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const RevealYOnScroll = ({ children, width = "fit-content" }: Props) => {
  //const slideControls = useAnimation();

  return (
    <div style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        animate={useAnimation()}
        transition={{ duration: 1, ease: easeInOut, type: "tween" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
