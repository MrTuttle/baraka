import React from "react";
import ClassNames from "classnames";

const pageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("min-h-screenHeightwithoutHeader")}>
      {children}
    </div>
  );
};

export default pageWrapper;
