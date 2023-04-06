import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import PostScreen from "../PostScreen";

describe("PostScreen", () => {
    const usePostController = jest.fn();
  it("should render a loading indicator when posts are being fetched", () => {
    usePostController.mockReturnValue({
      posts: null,
    });

    const { getByTestId } = render(<PostScreen />);
    expect(getByTestId("loading-indicator")).toBeDefined();
  });

  it("should render the post cards when posts are available", async () => {
    usePostController.mockReturnValue({
      posts: [
        {
          Post: {
            FirstName: "John",
            LastName: "Doe",
            Name: "My post",
            Desc: "My post description",
          },
          Files: {
            FileTop: {
              FileURL: "https://example.com/image.jpg",
            },
          },
        },
      ],
    });

    const { getByTestId } = render(<PostScreen />);
    await waitFor(() => expect(getByTestId("post-card")).toBeDefined());
  });
});