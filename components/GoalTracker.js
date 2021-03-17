import React from "react";
import { Container, StyledText, GoalText } from "../constants/styles";

const GoalTracker = () => {
  return (
    <Container direction="row">
      <Container style={{ paddingRight: 30 }}>
        <GoalText>3</GoalText>
        <StyledText colour="black" style={{ width: 80 }}>
          Weekly Goal
        </StyledText>
      </Container>
      <Container style={{ paddingLeft: 30 }}>
        <GoalText>1</GoalText>
        <StyledText colour="black" style={{ width: 100 }}>
          Completed Activities
        </StyledText>
      </Container>
    </Container>
  );
};

export default GoalTracker;
