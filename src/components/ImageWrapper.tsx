import React from "react";

interface Props {
  children: JSX.Element;
}

const ImageWrapper = ({ children }: Props) => {
  return <div style={{ border: "1px red solid" }}>{children}</div>;
};

export default ImageWrapper;
