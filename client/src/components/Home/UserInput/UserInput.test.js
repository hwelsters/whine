import UserInput from "./UserInput";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("it should let user enter input", () => {
  render(<UserInput />);

  const userTextInput = screen.getByTestId("userTextInput");
  const testValue = "I'm complaining about stuff in seven words";

  fireEvent.change(userTextInput, { target: { value: testValue } });
  expect(userTextInput.value).toBe(testValue);
});

test("it should stop user from uploading a post with more than seven words", () => {
  render(<UserInput />);

  const userTextInput = screen.getByTestId("userTextInput");
  const userTextError = screen.getByTestId("userTextError");
  const userInputButton = screen.getByTestId("userInputButton");

  const testValue = "I'm typing more than seven words like wha???";

  fireEvent.change(userTextInput, { target: { value: testValue } });
  fireEvent.click(userInputButton, new MouseEvent("click"));

  expect(userTextError.innerHTML).toBe("Too many words. Use less than seven");
});

test("it should let users upload a post with seven words or less", () => {
  render(<UserInput />);

  const userTextInput = screen.getByTestId("userTextInput");
  const userTextError = screen.getByTestId("userTextError");
  const userInputButton = screen.getByTestId("userInputButton");

  let testValue = "I'm complaining about stuff in seven words";
  fireEvent.change(userTextInput, { target: { value: testValue } });
  fireEvent.click(userInputButton, new MouseEvent("click"));
  expect(userTextError.innerHTML).toBe("");

  testValue = "I'm complaining about stuff in less";
  fireEvent.change(userTextInput, { target: { value: testValue } });
  fireEvent.click(userInputButton, new MouseEvent("click"));
  expect(userTextError.innerHTML).toBe("");
});

test("it should show preview of image", async () => {
  render(<UserInput />);

  window.URL.createObjectURL = () => {}
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const input = screen.getByTestId("image-input");

  fireEvent.change(input, {
    target: { files: [file] },
  });

  expect(input.files[0]).toStrictEqual(file);
});
