import React from "react";
import renderer from "react-test-renderer";
import GoalTracker from "../components/GoalTracker";

describe("<GoalTracker />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GoalTracker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
