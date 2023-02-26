import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("should have item name", () => {
    render(
      <Card
        item={{ name: "Khaled" } as any}
        cardColor={undefined as any}
        status={undefined as any}
        key={undefined}
      />
    );

    expect(screen.getByText("Khaled")).toBeInTheDocument();
  });

  it("check item status", () => {
    render(
      <Card
        status="todo"
        item={undefined as any}
        cardColor={undefined as any}
        key={undefined as any}
      />
    );

    expect(
      screen.getByTestId("progressBar").classList.contains("w-[0px]")
    ).toBeTruthy();
  });
});
