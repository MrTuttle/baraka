// src/components/Navbar.tsx
// Navbar Daisyui dark mode
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-100">
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
