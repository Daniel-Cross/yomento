import React from "react";
import { ScrollView } from "react-native";
import ImageCard from "../atoms/ImageCard";
import { Container, Title } from "../constants/styles";
import { images } from "../constants/data";

const LargeScroll = () => {
  return (
    <Container w="100%" align="flex-start" p={"20px"}>
      <Title align="left">Large horizontal scroll</Title>
      <Container w="100%" direction="row">
        <ScrollView horizontal>
          {images.map((image) => (
            <ImageCard key={image} h={"200px"} w={"250px"} image={image} />
          ))}
        </ScrollView>
      </Container>
    </Container>
  );
};

export default LargeScroll;
