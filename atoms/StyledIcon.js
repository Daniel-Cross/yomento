import React from "react";
import { Container, StyledText } from "../constants/styles";
import Icon from "react-native-vector-icons/FontAwesome";

const StyledIcon = ({ iconName, text, size, align, w, p }) => (
  <Container align={align} w={w} p={p}>
    <Icon name={iconName} size={size || 30} color="#0080FF" />
    <StyledText>{text}</StyledText>
  </Container>
);

export default StyledIcon;
