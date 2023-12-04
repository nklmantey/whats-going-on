import { ImageProps } from "react-native";

export type EntryCardType = {
  avatar: ImageProps;
  date: string;
  contact: string;
  category: string;
  text: string;
  rotation: string;
  translateXValue: number;
  color: string;
  direction: "left" | "right";
};
