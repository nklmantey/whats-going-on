import { Text, TextProps } from "react-native";

export function BoldText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "FigtreeBold" }]} />
  );
}

export function MediumText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "FigtreeMedium" }]} />
  );
}

export function RegularText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "FigtreeRegular" }]} />
  );
}

export function FancyText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "NPSRegular" }]} />
  );
}
