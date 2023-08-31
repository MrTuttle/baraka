"use client";
import { List } from "@/components";
import HeroExperimental from "@/components/HeroExperimental";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <h1 className="pt-3.5 megatypo">Cont</h1>
      <h1 className="pt-3.5 megatypo">
        <span>./</span>Act
      </h1>
      <HeroExperimental />
      <List />
    </>
  );
}
