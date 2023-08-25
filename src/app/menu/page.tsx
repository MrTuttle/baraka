"use client";

import AnimatedRoutes from "@/components/AnimatedRoutes";
import Image from "next/image";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <AnimatedRoutes>
      <>
        <div>
          <h1 className="text-9xl pt-3.5 font-thin">Menu</h1>
        </div>
      </>
    </AnimatedRoutes>
  );
}
