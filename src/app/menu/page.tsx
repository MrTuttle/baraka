"use client";

import AnimatedRoutes from "@/components/AnimatedRoutes";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

import { motion } from "framer-motion";
import { RevealYOnScroll } from "@/components/RevealYOnScroll";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <AnimatedRoutes>
      <>
        <div className="floor pb-90">
          <h1 className="pt-3.5 megatypo">
            <span>.</span>M.E<span>.</span>N.U.
          </h1>
        </div>
        <section className="floor pt-90">
          <div>
            <RevealOnScroll>
              <h1 className="text-6xl"> Le titre long ou presaue</h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="pt-3.5 text-3xl">Sous titre</h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="pt-1.5 pb-7">
                After designing web interfaces since 19 years as creative
                director in agency, I spend this year to learn to code it. Le
                composant RevealOnScroll est plus light que Reveal, il n’a pas
                besoins des useEffects. Il utilise whileInView pour detecter si
                le composant est dans le viewport ou non. A noter, l’animation
                se joue aussi en scroll inverse.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <button className="btn btn-outline btn-secondary">
                Contact me
              </button>
            </RevealOnScroll>
          </div>
        </section>
        <section className="floor">
          <div className="w-2/3 p-10">
            <RevealOnScroll>
              <h1 className="text-6xl"> Titre pour image</h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="pt-3.5 text-3xl">Sous titre</h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="pt-1.5 pb-7">
                After designing web interfaces since 19 years as creative
                director in agency, I spend this year to learn to code it. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
                soluta, sed aspernatur cum accusantium rerum consequuntur
                cupiditate facilis nulla ipsum recusandae modi sapiente error
                eveniet quisquam,
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <button className="btn btn-outline btn-secondary">
                Contact me
              </button>
            </RevealOnScroll>
          </div>
          <RevealYOnScroll>
            <div className="p-10">
              <img
                className="object-cover object-center inset-0 bloctraceblue transform-origin"
                width={900}
                height={900}
                src="/photo-1693040517341-6e1565f8ef42.jpeg"
                alt="img test"
              />
            </div>
          </RevealYOnScroll>
        </section>
        <section className="floor">
          <div>
            <RevealOnScroll>
              <h1 className="text-6xl"> Titre 2</h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="pt-3.5 text-3xl">Sous titre</h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="pt-1.5 pb-7">
                After designing web interfaces since 19 years as creative
                director in agency, I spend this year to learn to code it. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
                soluta, sed aspernatur cum accusantium rerum consequuntur
                cupiditate facilis nulla ipsum recusandae modi sapiente error
                eveniet quisquam, alias, quibusdam enim.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <button className="btn btn-outline btn-secondary">
                Contact me
              </button>
            </RevealOnScroll>
          </div>
        </section>
        {/* image test */}
        <section>
          <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col item-center bloctrace">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10  md:mb-0 relative rounded overflow-hidden">
              <img
                width={500}
                height={500}
                className="object-cover object-center inset-0 bloctraceblue transform-origin"
                src="/baraka/chambre-5.jpg"
                alt="img test"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="floor container bloctracegreen">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10  md:mb-0 relative rounded overflow-hidden bloctrace matrix">
              <img
                height={500}
                width={500}
                className="object-cover object-center inset-0 bloctraceblue"
                src="/baraka/chambre-2.jpg"
                alt="img test"
              />
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10  md:mb-0 relative rounded overflow-hidden bloctrace">
              <img
                width={800}
                height={450}
                className="object-cover object-center inset-0 bloctraceblue mask"
                src="/portrait-131.jpg"
                alt="img test"
              />
            </div>{" "}
          </div>
          <p>
            Lorem ipsum
            <a className="superlink" href="#">
              dolor
            </a>{" "}
            sit amet.
          </p>
        </section>
      </>
    </AnimatedRoutes>
  );
}
