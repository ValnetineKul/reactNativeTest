import React from "react";
import renderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react-native";
import { Input } from "./Input";

describe("Input tests", () => {
  it("renders the correct text", () => {
    render(<Input value="Hello world" />);
    expect(screen.getByDisplayValue("Hello world")).toBeTruthy();
  });

  it('renders input correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
