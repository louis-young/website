import React from "react";
import type { SocialProps } from "./types";

export const Social = ({ title, link, icon }: SocialProps) => {
  return (
    <li>
      <a
        href={link}
        title={title}
        target="_blank"
        rel="noopnener noreferrer"
        className="block w-5 text-black dark:text-white fill-current hover:opacity-80 transition duration-200"
      >
        {icon}
      </a>
    </li>
  );
};
