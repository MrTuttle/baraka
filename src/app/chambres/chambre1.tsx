"use client";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 0.8 }}
        variants={{
          initialState: { opacity: 0, y: 20 },
          animateState: { opacity: 1, y: 0 },
          exitState: {},
        }}
      >
        <h1 className="text-9xl pt-3.5 font-thin">Chambre 1</h1>
      </motion.div>
    </>
  );
}
