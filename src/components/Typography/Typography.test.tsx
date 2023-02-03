import React from "react";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react-native";
import { Typography } from "./Typography";

describe("Typography tests", () => {
  it("renders the correct text", () => {
    render(<Typography>Hello world</Typography>);
    expect(screen.getByText("Hello world")).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Typography>Hello world</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
