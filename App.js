import React from "react";
import { ScrollView } from "react-native";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import SmallScroll from "./components/SmallScroll";
import LargeScroll from "./components/LargeScroll";
import { AppContainer, colors } from "./constants/styles";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <>
      <ScrollView>
        <AppContainer>
          <LinearGradient
            colors={colors}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: -200,
              height: "200%",
            }}
          />
          <Progress />
          <SmallScroll />
          <LargeScroll />
        </AppContainer>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default App;
