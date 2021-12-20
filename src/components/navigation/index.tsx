import { Link } from "gatsby";
import React from "react";
import type { NavigationProps } from "./types";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-4">
        {links.map(({ name, link }) => (
          <li key={name}>
            <Link
              to={link}
              className="p-4 font-bold text-lg opacity-70 hover:opacity-100"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
