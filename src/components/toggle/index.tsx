import React from "react";
import { moon, sun } from "../../assets/icons";

export const Toggle = () => {
  const dark = false;

  const toggle = () => {};

  return dark ? (
    <button
      onClick={toggle}
      className="w-6 h-6 text-white hover:opacity-80 transition duration-200"
    >
      {sun}
    </button>
  ) : (
    <button
      onClick={toggle}
      className="w-6 h-6 text-black hover:opacity-80 transition duration-200"
    >
      {moon}
    </button>
  );
};
