import { AnimatedEntryCard } from "@/components/global";
import { Button } from "@/components/ui";
import { FancyText } from "@/components/ui/StyledText";
import { IndexScreenEntryData } from "@/constants/Data";
import { SafeAreaView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function OnoardingScreen() {
  const translateX = useSharedValue(500);
  const { push } = useRouter();

  useEffect(() => {
    translateX.value = withSpring(0, { damping: 10, stiffness: 80 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  function handleGoToNextScreen() {
    push("/(onboarding)");
  }

  return (
    <SafeAreaContainer>
      <Container>
        <View>
          {IndexScreenEntryData.top.map((entry, index) => (
            <AnimatedEntryCard key={index} {...entry} />
          ))}
        </View>
        <OnboardingTextView>
          <OnboardingText>What's going on?</OnboardingText>
        </OnboardingTextView>
        <View>
          {IndexScreenEntryData.bottom.map((entry, index) => (
            <AnimatedEntryCard key={index} {...entry} />
          ))}
          <AnimatedButtonView style={animatedStyle}>
            <Button
              onPress={handleGoToNextScreen}
              title=""
              iconOnly
              icon={<Ionicons name="arrow-forward" size={20} color="#fff" />}
            />
          </AnimatedButtonView>
        </View>
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
  justifyContent: "space-between",
});

const OnboardingTextView = styled(View)({
  width: "50%",
  alignSelf: "center",
});

const AnimatedButtonView = styled(Animated.View)({
  width: "100%",
  alignSelf: "center",
});

const OnboardingText = styled(FancyText)({
  fontSize: 60,
  textAlign: "center",
});
