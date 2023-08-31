"use client";
// src/components/Navbar.tsx
// Navbar Daisyui dark mode
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
// const classNames = require("classnames");
const classNames = require("classnames");

export const Navbar: React.FC = () => {
  // sticky stuffs

  console.log("ouch");
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className={`navbar bg-base-100 ${scrolled ? "scrolled" : ""}`}> */}
      <div
        className={classNames("navbar bg-base-100 navbar-sicky", {
          scrolled: scrolled,
        })}
      >
        {/* <div className={paf.join(" ") + "navbar" + "bg-base-100"}> */}
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            HomedaisyUI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/chambres">Chambres</Link>
            </li>
            <li>
              <details>
                <summary>
                  {" "}
                  <Link href="/chambres">Chambres</Link>
                </summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link href="/chambres/chambre1">Chambre une</Link>
                  </li>
                  <li>
                    <Link href="/chambres/chambre2">Chambre deux</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
