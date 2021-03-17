import React from "react";
import renderer from "react-test-renderer";
import LargeScroll from "../components/LargeScroll";

describe("<LargeScroll />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LargeScroll />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
