import type { JSX } from "react";

export interface ServicesType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface NavItemsType {
  path?: string;
  label: string;
  items?: { path: string; label: string };
}

export interface MessageType {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}
