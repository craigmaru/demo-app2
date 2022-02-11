import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";

const testProps = { getInput: jest.fn() };

// Describe

test("should take in a value from the user and store it", () => {
  render(<Input {...testProps} />);
  const input = screen.getByTestId("searched");
  input.value = "London";
  expect(input).toHaveValue("Paris");
});

test("should set state to the user input and display fetched data", () => {
  render(<Input {...testProps} />);
  const button = screen.getByText("Search");
  const input = screen.getByTestId("searched");
  input.value = "London";
  fireEvent.click(button);
  expect(input.value).toBeInTheDocument();
});
