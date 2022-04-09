import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import Autocomplete from "./Autocomplete"

test("renders the autocomplete input", () => {
  render(
    <Autocomplete
      options={[]}
      id="autocomplete-field"
      placeholder="Enter Value"
    />
  )
  const element = screen.getByLabelText(/enter value/i)
  expect(element).toBeInTheDocument()
})

test("renders autocomplete options dropdown on enter", async () => {
  render(
    <Autocomplete
      options={["test@gmail.com", "test1@gmail.com"]}
      id="autocomplete-field"
      placeholder="Enter Value"
    />
  )
  const element = screen.getByLabelText(/enter value/i)
  expect(element).toBeInTheDocument()
  await userEvent.type(element, "test");
  expect((element as HTMLInputElement).value).toBe("test")
  const optionsList = screen.getByRole("list", {name: /autocomplete options/i})
  expect(optionsList).toBeInTheDocument()
})

test("selects option on click", () => {
})

test("selects mutliple options on click", () => {
})

test("navigates between options with the up / down arrows", () => {
})

test("selects option on tab and enter", () => {
})

test("provides an option to remove input on mouse over", () => {
})

test("removes an option on click", () => {
})

test("removes an option on delete or backspace", () => {
})

test("displays error indicator on invalid input", () => {
})
