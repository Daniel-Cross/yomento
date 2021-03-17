import React from "react";
import StyledIcon from "../atoms/StyledIcon";
import { StyledText, Container } from "../constants/styles";
import GoalTracker from "./GoalTracker";

const Progress = () => {
  return (
    <Container p={"20px"} w="100%">
      <StyledIcon
        iconName="bell"
        size={30}
        align="flex-start"
        w="100%"
        p={"30px 0 0 0"}
      />
      <GoalTracker />
      <StyledText fontStyle="italic" colour="black" style={{ paddingTop: 20 }}>
        Complete 2 sessions to reach your goal!
      </StyledText>
    </Container>
  );
};

export default Progress;
