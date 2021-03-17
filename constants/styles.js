import styled from "styled-components/native";

export const colors = ["#000080", "#1034A6"];

export const AppContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: space-evenly;
  padding: ${({ p }) => p || "5px"};
  width: ${({ w }) => w || "auto"};
`;

export const StyledText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ colour }) => colour || "#0080ff"};
  padding-top: 5px;
  color: white;
`;

export const Title = styled.Text`
  font-size: 22px;
  text-align: ${({ align }) => align || "center"};
  color: black;
  font-weight: 700;
  padding: 5px;
  color: white;
`;

export const StyledImage = styled.Image`
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: ${({ h }) => h || "150px"};
  width: ${({ w }) => w || "200px"};
`;

export const GoalText = styled.Text`
  font-size: 80px;
  font-weight: 700;
  color: white;
`;

export const NavbarContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0;
  background-color: #000080;
`;
