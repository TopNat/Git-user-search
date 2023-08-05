import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonSearch, InputSearch, SearchDiv } from "./styles/components";

describe("Styled Components on the page", () => {
  it("present button component", () => {
    render(<ButtonSearch data-testid="button" />);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("present SearchDiv component", () => {
    render(<SearchDiv data-testid="div" />);
    expect(screen.getByTestId("div")).toBeInTheDocument();
  });

  it("present type text on the input", () => {
    render(<InputSearch type="text" data-testid="input" />);
    expect(screen.getByTestId("input")).toHaveAttribute("type", "text");
  });
});
