import React from "react";
import type { DateProps } from "./types";

export const Date = ({ date }: DateProps) => {
  return <time dateTime={date}>{date}</time>;
};
