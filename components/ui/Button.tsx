import { TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { MediumText } from "./StyledText";

type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
  isLoading?: boolean;
  iconOnly?: boolean;
};

export default function Button({
  title,
  onPress,
  icon,
  isLoading,
  iconOnly,
}: ButtonProps) {
  return (
    <ButtonContainer style={{ gap: iconOnly ? 0 : 12 }} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          <ButtonText>{title}</ButtonText>
          {icon && icon}
        </>
      )}
    </ButtonContainer>
  );
}

const ButtonContainer = styled(TouchableOpacity)({
  backgroundColor: "#000",
  width: "100%",
  height: 50,
  paddingHorizontal: 28,
  borderRadius: 16,
  alignItems: "center",
  flexDirection: "row",
});

const ButtonText = styled(MediumText)({
  color: "#fff",
  fontSize: 20,
});
