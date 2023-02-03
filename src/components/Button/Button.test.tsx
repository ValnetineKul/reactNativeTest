import React from "react";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react-native";
import { Button } from "./Button";

describe("Button tests", () => {
  it("renders the correct message", () => {
    render(<Button title="Hello world" />);
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Button title={"Hello world"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
