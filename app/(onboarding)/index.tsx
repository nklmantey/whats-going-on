import { AnimatedEntryCard } from "@/components/global";
import { Button } from "@/components/ui";
import { FancyText } from "@/components/ui/StyledText";
import { OnboardingScreenEntryCards } from "@/constants/Data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components/native";

export default function Onboarding() {
  const { push } = useRouter();
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  function switchActiveEntryCard() {
    const newIndex = (index + 1) % OnboardingScreenEntryCards.length;
    setIndex(newIndex);
  }

  function handleGoToAuth() {
    push("/(auth)");
  }

  function generateRandomRotation() {
    return Math.random() * (10 - -10) + -10;
  }

  return (
    <SafeAreaContainer>
      <Container>
        <OnboardingTitleText>A place...</OnboardingTitleText>
        <AnimatedButtonView style={animatedStyle}>
          {index !== 3 ? (
            <Button
              onPress={switchActiveEntryCard}
              title=""
              iconOnly
              icon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
            />
          ) : (
            <Button onPress={handleGoToAuth} title="Let's go" />
          )}
        </AnimatedButtonView>
        <AnimatedTextView>
          {index !== 3 ? (
            <OnboardingSubtext>
              {OnboardingScreenEntryCards[index].subtext}
            </OnboardingSubtext>
          ) : (
            <OnboardingSubtext>
              where privacy is paramount. NO ads, no tracking and no data is
              shared with anyone, ever{" "}
            </OnboardingSubtext>
          )}
        </AnimatedTextView>
        {index !== 3 && (
          <AnimatedEntryCard {...OnboardingScreenEntryCards[index]} />
        )}
        <EntryCardsContainer>
          {OnboardingScreenEntryCards.map((entry, cardsIndex) => (
            <AnimatedEntryCard
              key={cardsIndex}
              {...entry}
              rotation={
                cardsIndex === index ? "0deg" : `${generateRandomRotation()}deg`
              }
            />
          ))}
        </EntryCardsContainer>
      </Container>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled(SafeAreaView)({
  flex: 1,
});

const Container = styled(View)({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

const OnboardingTitleText = styled(FancyText)({
  fontSize: 60,
});

const OnboardingSubtext = styled(FancyText)({
  fontSize: 30,
  color: "gray",
  textAlign: "center",
});

const EntryCardsContainer = styled(View)({
  flexDirection: "row",
  position: "absolute",
  bottom: 0,
});

const AnimatedButtonView = styled(Animated.View)({
  position: "absolute",
  bottom: 0,
  zIndex: 100,
});

const AnimatedTextView = styled(Animated.View)({
  padding: 20,
});
