import React from "react";
import { Container, StyledImage } from "../constants/styles";

const ImageCard = ({ image, h, w }) => {
  return (
    <Container>
      <StyledImage w={w} h={h} source={{ uri: image }} />
    </Container>
  );
};

export default ImageCard;
