import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

 import { Platform } from "react-native";

export const Container = styled.View`
  width: 100%;
  background-color: white;
  height: ${Platform.OS === 'android' ? normalize(95) :  normalize(70)}px;
`;

export const Content = styled.View`
  background-color: grey;
  width: 100%;
  height: 100%;
  padding: 0 ${normalize(16)}px;
  border-bottom-end-radius: ${normalize(20)}px;
  border-bottom-start-radius: ${normalize(20)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  width: ${normalize(32)}px;
  height: ${normalize(32)}px;
  border-radius: ${normalize(16)}px;
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
`;
