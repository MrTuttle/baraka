"use client";
// src/components/Navbar/NavbarSticky.tsx
// Navbar Daisyui dark mode
import Link from "next/link";
import { useEffect, useState } from "react";
// import "@/components/Navbar/navbar.css";

export const NavbarSticky: React.FC = () => {
  // scroll direction hook
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
      let lastScrollY = window.scrollY;

      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          // direction !== scrollDirection
          // original code, seem to be useless :
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 0 || scrollY - lastScrollY < -1)
        ) {
          setScrollDirection(direction);
          console.log(`scrollY: ${scrollY} lastScrollY: ${lastScrollY}`);
          console.log(
            `différence: ${scrollY - lastScrollY} -> direction:${direction}`
          );
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener

      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  // sticky stuffs
  const scrollDirection = useScrollDirection();

  return (
    <>
      {/* si scrollDirection = down renvois "scrolled" comme nom de classe  */}
      {/* la classe scrolled doit contenir  transform: translate(0px, -64px); */}
      <div
        className={`navbar bg-base-100 navbar-sticky ${
          scrollDirection === "down" && "scrolled"
        }`}
      >
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
            <li>
              <Link href="/listofposts">Posts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
