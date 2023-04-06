import React from "react";
import {
  Container,
  Avatar,
  Hi,
  Name,
  ContainerAvatar,
  ContainerIcons,
  ContentText,
  Content,
} from "./Header.styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons"; 
import { Platform, StatusBar } from "react-native";
import { normalize } from "@utils/normalize";
export default function Header() {
  return (
    <Container >
        <Content style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0 }}>
      <ContainerAvatar>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/32855078?v=4",
          }}
          testID="user-avatar"
        />
        <ContentText>
          <Hi>Hi</Hi>
          <Name testID="user-name">Paulo</Name>
        </ContentText>
      </ContainerAvatar>

      <ContainerIcons>
        <FontAwesome 
        name="search"
        size={20}
        color="black" 
        style={{marginRight: normalize(20)}}
        testID="search-icon"
        />
        <FontAwesome5 name="bell" size={20} color="black" testID="notification-icon" />
      </ContainerIcons>
      </Content>
    </Container>
  );
}
