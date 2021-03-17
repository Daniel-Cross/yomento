import React from "react";
import renderer from "react-test-renderer";
import SmallScroll from "../components/SmallScroll";

describe("<SmallScroll />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SmallScroll />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
