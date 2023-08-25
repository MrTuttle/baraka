"use client";

import AnimatedRoutes from "@/components/AnimatedRoutes";
import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <AnimatedRoutes>
      <>
        <div>
          <h1 className="pt-3.5 megatypo">
            <span>.</span>M.E<span>.</span>N.U.
          </h1>
        </div>
      </>
    </AnimatedRoutes>
  );
}
