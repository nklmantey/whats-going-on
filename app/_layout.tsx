import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    FigtreeBold: require("@/assets/fonts/Figtree-Bold.ttf"),
    FigtreeMedium: require("@/assets/fonts/Figtree-Medium.ttf"),
    FigtreeRegular: require("@/assets/fonts/Figtree-Regular.ttf"),
    NPSRegular: require("@/assets/fonts/NanumPenScript-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
