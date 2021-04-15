import { render } from "@testing-library/react";

import DropdownOptions from "./index";

describe("Header", () => {
  test("is truthy", () => {
    expect(DropdownOptions).toBeTruthy();
  });

  test("renders DropdownOptions component and should include UL tag", () => {
    const { container } = render(
      <DropdownOptions
        optionsArray={[{ login: "login" }]}
        value="login"
        label="login"
        onClick={() => {}}
      />
    );
    const imageTag = container.getElementsByTagName("LI")[0];
    expect(imageTag).toBeInTheDocument();
  });
});
