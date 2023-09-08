import Image from "next/image";
import AnimatedRoutes from "@/components/AnimatedRoutes";
import Header from "@/components/Header/Header";
import FullScreenBg from "@/components/FullScreenBg";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <AnimatedRoutes>
      <>
        <div className="py-3.5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          <h1 className="pt-20 text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]">
            All you
            <span>-</span>
          </h1>
          <h1 className="text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]">
            need
          </h1>

          <h1 className="text-8xl font-bold sm:text-[11rem] md:text-[14rem] lg:text-[19rem]">
            <span>-</span>
            is code
          </h1>

          <h3 className="text-2xl font-light pt-10 pb-20 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consequatur cum ullam repellat dolores eos facilis praesentium
            doloremque! Suscipit nobis eos corrupti molestias accusamus error!
            In ab reiciendis dolorum illo!
          </h3>
          <Header />
        </div>

        <FullScreenBg />
        <div className="grid md:grid-cols-4 gap-4">
          <div className="card bg-primary p-3.5">01</div>
          <div className="card bg-accent p-3.5">02</div>
          <div className="card bg-secondary p-3.5">03</div>
          <div className="bg-accent p-3.5 rounded-box">04</div>
          <div className="bg-slate-600 card p-3.5">
            05
            <img
              className="rounded-box"
              src="/portrait-131.jpg"
              alt="willem Dafoe"
              width={900}
              height={200}
            />
          </div>
          <div className="card bg-slate-600 p-3.5">
            06
            <img
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
