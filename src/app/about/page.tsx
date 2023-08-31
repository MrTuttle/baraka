// src/app/about/page.tsx

import { Reveal } from "@/components/Reveal";

// `app/about/page.tsx` is the UI for the `/about` URL
export default function Page() {
  return (
    <>
      <section>
        <Reveal>
          <h1 className="pt-3.5 megatypo">/. About</h1>
        </Reveal>
      </section>
      <section className="floor">
        <div>
          <Reveal>
            <h1 className="text-6xl"> Hey, je suis Flo</h1>
          </Reveal>
          <Reveal>
            <h2 className="pt-3.5 text-3xl">I'm a full stack developper</h2>
          </Reveal>
          <Reveal>
            <p>
              After designing web interfaces since 19 years as creative director
              in agency, I spend this year to learn to code it
            </p>
          </Reveal>
          <Reveal>
            <button className="btn">Button</button>
          </Reveal>
        </div>
      </section>
      <section className="floor">
        <div>
          <Reveal>
            <h1 className="text-6xl"> Titre 2</h1>
          </Reveal>
          <Reveal>
            <h2 className="pt-3.5 text-3xl">Sous titre</h2>
          </Reveal>
          <Reveal>
            <p className="pt-1.5">
              After designing web interfaces since 19 years as creative director
              in agency, I spend this year to learn to code it{" "}
            </p>
          </Reveal>
          <button>Contact me</button>
        </div>
      </section>
    </>
  );
}
