import React from "react";
import StyledIcon from "../atoms/StyledIcon";
import { NavbarContainer } from "../constants/styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledIcon iconName="home" text="Home" />
      <StyledIcon iconName="search" text="Search" />
      <StyledIcon iconName="lightbulb-o" text="Explore" />
      <StyledIcon iconName="user" text="Me" />
    </NavbarContainer>
  );
};

export default Navbar;
