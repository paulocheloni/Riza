import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../Header";

describe("Header", () => {
  describe('Header', () => {
  it('renders the user avatar and name correctly', () => {
    const { getByTestId } = render(<Header />);
    const avatar = getByTestId('user-avatar');
    const name = getByTestId('user-name');
    
    expect(avatar.props.source.uri).toBe('https://avatars.githubusercontent.com/u/32855078?v=4');
    expect(name.props.children).toBe('Paulo');
  });

  it('renders the search and notification icons', () => {
    const { getByTestId } = render(<Header />);
    const searchIcon = getByTestId('search-icon');
    const notificationIcon = getByTestId('notification-icon');

    expect(searchIcon.props).toMatchObject({"allowFontScaling": false, "children": ["", undefined], "selectable": false, "style": [{"color": "black", "fontSize": 20}, {"marginRight": 40}, {"fontFamily": "FontAwesome", "fontStyle": "normal", "fontWeight": "normal"}, {}], "testID": "search-icon"});
    expect(notificationIcon.props).toMatchObject({})
  });
});
});