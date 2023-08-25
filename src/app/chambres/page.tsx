"use client";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <div className=" py-3.5">
        <h1 className="text-9xl pt-3.5 font-thin">Les chambres</h1>
        <h3 className="text-4xl  font-serif pt-10 pb-20">
          Cinq chambres, cinq parfums, cinq épices d'Afrique
        </h3>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="card bg-amber-300 p-3.5">01</div>
        <div className="card bg-accent p-3.5">02</div>
        <div className="card bg-secondary p-3.5">03</div>
        <div className="bg-accent p-3.5 rounded-box">04</div>
        <div className=" bg-zinc-200 card p-3.5">
          05
          <Image
            src="/baraka/chambre-5.jpg"
            alt="willem Dafoe"
            width={900}
            height={200}
          />
        </div>
        <div className="card bg-white  shadow p-3.5">
          06
          <Image
            src="/baraka/chambre-1.jpg"
            alt="willem Dafoe"
            width={600}
            height={200}
          />
        </div>
        <div className="card bg-stone-200 p-3.5">07</div>
        <div className="card bg-gray-300 p-3.5">08</div>
        <div className="card bg-amber-300 p-3.5">01</div>
        <div className="card bg-accent p-3.5">02</div>
        <div className="card bg-secondary p-3.5">03</div>
        <div className="bg-accent p-3.5 rounded-box">04</div>
        <div className=" bg-zinc-200 card p-3.5">
          05
          <Image
            src="/baraka/chambre-5.jpg"
            alt="willem Dafoe"
            width={900}
            height={200}
          />
        </div>
        <div className="card bg-white  shadow p-3.5">
          06
          <Image
            src="/baraka/chambre-1.jpg"
            alt="willem Dafoe"
            width={600}
            height={200}
          />
        </div>
        <div className="card bg-stone-200 p-3.5">07</div>
        <div className="card bg-gray-300 p-3.5">08</div>
      </div>
    </>
  );
}
