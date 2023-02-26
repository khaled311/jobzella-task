import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("should have item name", () => {
    render(<Card item={{ name: "Khaled" }} />);

    expect(screen.getByText("Khaled")).toBeInTheDocument();
  });

  it("check item status", () => {
    render(<Card status="todo" />);

    expect(
      screen.getByTestId("progressBar").classList.contains("w-[0px]")
    ).toBeTruthy();
  });
});
