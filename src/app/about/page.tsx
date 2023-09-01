// src/app/about/page.tsx

import { Reveal } from "@/components/Reveal";
import { RevealOnScroll } from "@/components/RevealOnScroll";

// `app/about/page.tsx` is the UI for the `/about` URL
export default function Page() {
  return (
    <>
      <section>
        <RevealOnScroll>
          <h1 className="pt-3.5 megatypo">/. About</h1>
        </RevealOnScroll>
      </section>
      <section className="floor">
        <div>
          <RevealOnScroll>
            <h1 className="text-6xl"> Hey, je suis Flo</h1>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="pt-3.5 text-3xl">I’m a full stack developper</h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <p>
              After designing web interfaces since 19 years as creative director
              in agency, I spend this year to learn to code it
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <button className="btn">Button</button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
