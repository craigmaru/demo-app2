import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";

const testProps = { getInput: jest.fn() };

// Describe

test("should take in a value from the user and store it", () => {
  render(<Input {...testProps} />);
  const input = screen.getByTestId("searched");
  input.value = "London";
  expect(input).toHaveValue("London");
});

test("should call the getInput function on button click", () => {
  render(<Input {...testProps} />);
  const button = screen.getByText("Search");
  fireEvent.click(button);
  expect(testProps.getInput).toHaveBeenCalledTimes(1);
});
