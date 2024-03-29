import React from "react";
import bgImage from "../../../public/mountains.jpg";
import Image from "next/image";

const Header = () => {
  const debug = (monlog) => {
    console.log(`mon logg : ${monlog}`);
  };
  const srcImage = bgImage.src;
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url({srcImage})",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {debug(srcImage)}

            <button className="btn btn-primary">Get Started</button>
            <Image src={bgImage} width="100" height="50" alt="alt text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
