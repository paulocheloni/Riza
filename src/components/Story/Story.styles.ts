import { normalize } from "@utils/normalize";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%; 
  height: ${normalize(60)}px;px; 
  margin-top: 8px;
`;

export const Content = styled.View`
  background-color: blue;
  width: ${width};
  height: ${normalize(200)}px;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
`;
export const ContentText = styled.View`
  margin-left: ${normalize(8)}px;
`;

export const Hi = styled.Text`
  font-size: ${normalize(12)}px;
  color: #000;
`;

export const Name = styled.Text`
  font-size: ${normalize(14)}px;
  font-weight: bold;
  color: #000;
`;

export const Avatar = styled.Image`
  width: ${normalize(40)}px;
  height: ${normalize(40)}px;
  border-radius: ${normalize(16)}px;
  margin: 0 ${normalize(10)}px;
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
`;
