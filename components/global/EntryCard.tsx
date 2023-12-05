import { EntryCardType } from "@/types";
import { View, Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import { BoldText, RegularText } from "../ui/StyledText";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function EntryCard({
  date,
  contact,
  category,
  text,
  direction,
  rotation,
  translateXValue = 0,
  translateYValue = 0,
  avatar,
  color,
}: EntryCardType) {
  const { width, height } = Dimensions.get("window");
  const translateX = useSharedValue(direction === "left" ? -width : width);
  const translateY = useSharedValue(direction === "top" ? -height : height);

  useEffect(() => {
    translateX.value = withSpring(0, { damping: 10, stiffness: 80 });
    translateY.value = withSpring(0, { damping: 10, stiffness: 80 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value + translateXValue },
        { translateY: translateY.value + translateYValue },
        { rotate: rotation },
      ],
    };
  });

  return (
    <CardContainer style={animatedStyle}>
      <AvatarContainer style={{ backgroundColor: color }}>
        <Avatar source={avatar} resizeMode="contain" />
      </AvatarContainer>
      <HeaderView>
        <DateAndContactView>
          <DateAndContactText>{date}</DateAndContactText>
          <DateAndContactText>•</DateAndContactText>
          <DateAndContactText>{contact}</DateAndContactText>
        </DateAndContactView>
        <CategoryView style={{ backgroundColor: color }}>
          <CategoryText>{category}</CategoryText>
        </CategoryView>
      </HeaderView>
      <MainTextView>
        <MainText>{text}</MainText>
      </MainTextView>
    </CardContainer>
  );
}

const CardContainer = styled(Animated.View)({
  position: "relative",
  backgroundColor: "#d3d3d3",
  width: 300,
  paddingBottom: 12,
  marginVertical: 4,
  borderRadius: 20,
});

const AvatarContainer = styled(View)({
  position: "absolute",
  left: -8,
  top: -10,
  width: 40,
  height: 40,
  borderRadius: 40,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 2,
  borderColor: "#fff",
});

const Avatar = styled(Image)({
  width: 30,
  height: 30,
});

const HeaderView = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const DateAndContactView = styled(View)({
  flexDirection: "row",
  gap: 4,
  marginLeft: 40,
});

const DateAndContactText = styled(RegularText)({
  color: "gray",
});

const CategoryView = styled(View)({
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
});

const CategoryText = styled(RegularText)({
  color: "#fff",
  fontSize: 12,
});

const MainTextView = styled(View)({
  paddingVertical: 8,
  paddingHorizontal: 20,
});

const MainText = styled(BoldText)({
  fontSize: 16,
});
