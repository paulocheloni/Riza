import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background: grey;
`;

export const Title = styled.Text`
  font-size: ${normalize(20)}px;
  font-weight: bold;
  color: #000;
  margin: ${normalize(16)}px ${normalize(16)}px 0 ${normalize(16)}px;
`;

export const Content = styled.View`
  background-color: white;
  padding-bottom: ${normalize(100)}px;
`;

export const ScrollView = styled.ScrollView`
  height: ${normalize(150)}px;
  width: 100%;
`;

export const Footer = styled.View`
  height: ${normalize(200)}px;
`;
