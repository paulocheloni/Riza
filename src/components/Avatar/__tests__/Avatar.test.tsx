import React from "react";
import { render } from "@testing-library/react-native";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders the author name and thumbnail", () => {
    const { getByText, getByTestId } = render(
      <Avatar
        avatarUrl="https://example.test/ada.jpg"
        userName="Ada"
        lastName="Lovelace"
      />
    );

    expect(getByText("Ada Lovelace")).toBeTruthy();
    expect(getByTestId("avatar-image").props.source.uri).toBe(
      "https://example.test/ada.jpg"
    );
  });
});
