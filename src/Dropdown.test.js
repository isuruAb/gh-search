import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("renders input component", () => {
  const { container } = render(<Dropdown />);
  const inputTag = container.getElementsByTagName("INPUT")[0];
  expect(inputTag).toBeInTheDocument();
});
