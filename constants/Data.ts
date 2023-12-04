import { EntryCardType } from "@/types";

export const DummyEntryDataTop: EntryCardType[] = [
  {
    date: "10/18/2023",
    contact: "Tom",
    category: "Notes",
    text: "Started working on my PhD in San Francisco",
    direction: "left",
    rotation: "-5deg",
    translateXValue: -25,
    avatar: require("@/assets/images/tom.png"),
    color: "cornflowerblue",
  },
  {
    date: "11/12/2023",
    contact: "Kim",
    category: "Event",
    text: "Just had the first date with Luke at the coffee shop. I have a great feeling about this",
    direction: "right",
    rotation: "0deg",
    translateXValue: 150,
    avatar: require("@/assets/images/kim.png"),
    color: "crimson",
  },
  {
    date: "10/18/2023",
    contact: "Linda",
    category: "Location",
    text: "Moved to Melbourne, Australia with Dom! CLose to the woods now and a lot of nature around me",
    direction: "left",
    rotation: "-0deg",
    translateXValue: -25,
    avatar: require("@/assets/images/linda.png"),
    color: "lightcoral",
  },
];

export const DummyEntryDataBottom: EntryCardType[] = [
  {
    date: "10/18/2023",
    contact: "Yourself",
    category: "Personal",
    text: "29th birthday on Wednesday!",
    direction: "left",
    rotation: "-10deg",
    translateXValue: -40,
    avatar: require("@/assets/images/avatar.png"),
    color: "coral",
  },
  {
    date: "10/18/2023",
    contact: "Justin",
    category: "Personal",
    text: "Graduating tomorrow",
    direction: "right",
    rotation: "5deg",
    translateXValue: 140,
    avatar: require("@/assets/images/justin.png"),
    color: "palegreen",
  },
];
