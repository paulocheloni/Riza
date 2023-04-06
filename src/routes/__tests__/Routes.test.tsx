import { render, waitFor } from "@testing-library/react-native";
import { MyTabs } from "../Routes";
import React from "react";

describe("MyTabs", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })
  it("renders the HomeScreen and PostScreen tabs", () => {
    const { getByText } = render(<MyTabs />);
    expect(getByText("Home")).toBeDefined();
    expect(getByText("Post")).toBeDefined();
  });
  

    it("renders the HomeScreen tab as the default", async () => {
    const { getAllByTestId } = render(<MyTabs />);
    await waitFor(() => {
        expect(getAllByTestId("home-icon")).toBeDefined();
        
    })

    })
  
  
});