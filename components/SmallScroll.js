import React from "react";
import { ScrollView } from "react-native";
import ImageCard from "../atoms/ImageCard";
import { Container, Title } from "../constants/styles";
import { images } from "../constants/data";

const SmallScroll = () => {
  return (
    <Container w="100%" align="flex-start" p={"20px"}>
      <Title align="left">Small horizontal scroll</Title>
      <Container w="100%" direction="row">
        <ScrollView horizontal>
          {images.map((image) => (
            <ImageCard key={image} image={image} />
          ))}
        </ScrollView>
      </Container>
    </Container>
  );
};

export default SmallScroll;
