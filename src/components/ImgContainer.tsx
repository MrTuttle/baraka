import React from "react";
import Image from "next/image";
import me from "../../../baraka/public/baraka/mountains.avif";

export default function ImgContainer() {
  return (
    <Image
      src={me}
      alt="Full screen"
      sizes="100vw"
      style={{ width: "100", height: "auto" }}
    />
  );
}
