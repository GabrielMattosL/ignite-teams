import React from "react";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

type Props = { showBackButton?: boolean };

export function Header({ showBackButton = false }: Props) {
  const handleBackButtonPress = () => {
    console.log("BackButton was pressed");
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleBackButtonPress}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
