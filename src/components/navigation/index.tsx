import { Link } from "gatsby";
import React from "react";
import type { NavigationProps } from "./types";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul>
        {links.map(({ name, link }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
