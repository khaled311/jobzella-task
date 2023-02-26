import { screen, render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("not show message, not be in the document", () => {
    render(<ErrorMessage message={undefined} />);

    expect(screen.queryByTestId("messageContainer")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("messageContainer")?.innerText
    ).not.toBeTruthy();
  });

  it("show message, to be in the document", () => {
    render(<ErrorMessage message="This is message" />);

    expect(screen.getByTestId("messageContainer")).toBeInTheDocument();
    expect(screen.getByTestId("messageContainer")?.textContent).toBe(
      "This is message"
    );
  });
});
