import classNames from "classnames";
import React from "react";
import type { ContainerProps } from "./types";

export const Container = ({
  size = "medium",
  className,
  children,
}: ContainerProps) => {
  const containerClassNames = classNames(
    {
      "container mx-auto px-12 md:px-20": true,
      "lg:px-26 xl:px-32 2xl:px-60": size === "medium",
    },
    className,
  );

  return <div className={containerClassNames}>{children}</div>;
};
