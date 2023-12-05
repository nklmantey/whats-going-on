import { ImageProps } from "react-native";

export type EntryCardType = {
  avatar: ImageProps;
  date: string;
  contact: string;
  category: string;
  text: string;
  rotation: string;
  translateXValue?: number;
  translateYValue?: number;
  color: string;
  direction: string;
};
