import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedRoutes from "@/components/AnimatedRoutes";
import ImgContainer from "@/components/ImgContainer";
import Header from "@/components/Header/Header";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <AnimatedRoutes>
      <>
        <div className="py-3.5">
          <h1 className="pt-3.5 megatypo">
            All you
            <span>-</span>
          </h1>
          <h1 className="megatypo">need</h1>

          <h1 className="megatypo">
            <span>-</span>
            is code
          </h1>

          <h3 className="text-2xl font-light pt-10 pb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consequatur cum ullam repellat dolores eos facilis praesentium
            doloremque! Suscipit nobis eos corrupti molestias accusamus error!
            In ab reiciendis dolorum illo!
          </h3>
          <Header />
        </div>
        <ImgContainer>gh</ImgContainer>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="card bg-primary p-3.5">01</div>
          <div className="card bg-accent p-3.5">02</div>
          <div className="card bg-secondary p-3.5">03</div>
          <div className="bg-accent p-3.5 rounded-box">04</div>
          <div className="bg-slate-600 card p-3.5">
            05
            <Image
              className="rounded-box"
              src="/portrait-131.jpg"
              alt="willem Dafoe"
              width={900}
              height={200}
            />
          </div>
          <div className="card bg-slate-600 p-3.5">
            06
            <Image
              src="/baraka/chambre-2.jpg"
              alt="willem Dafoe"
              width={600}
              height={200}
            />
          </div>
          <div className="card bg-slate-600 p-3.5">07</div>
          <div className="card bg-slate-600 p-3.5">08</div>
        </div>
      </>
    </AnimatedRoutes>
  );
}
