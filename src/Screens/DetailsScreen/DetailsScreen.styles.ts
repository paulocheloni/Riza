import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: grey;
`;

export const Content = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const TextNamePoster = styled.Text`
  font-size: ${normalize(12)}px;
  margin-top: ${normalize(8)}px;
`;

export const ContainerText = styled.View`
  margin-top: ${normalize(10)}px;
  margin-left: ${normalize(10)}px;
`;
