import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Button } from "./Button";

describe("Hello", () => {
  it("renders the correct message", () => {
    render(<Button title="Ass" />);
    expect(screen.getByText("Ass")).toBeTruthy();
  });
});
