import { Navbar } from "@/components/Navbar";
import { NavbarSticky } from "@/components/Navbar/NavbarSticky";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import AnimatedRoutes from "@/components/AnimatedRoutes";
import ImgContainer from "@/components/ImgContainer";
import Header from "@/components/Header/Header";

// const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Baraka",
  description: "testing next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <body className={lora.className}> */}
        <NavbarSticky />
        <div className="bloctrace">
          {/* <Header /> */}
          {/* <ImgContainer></ImgContainer> */}

          <div className="md:container md:mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
