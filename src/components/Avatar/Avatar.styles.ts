import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  height: ${normalize(30)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${normalize(4)}px ${normalize(8)}px;
`;

export const AvatarImage = styled.Image`
  height: ${normalize(30)}px;
  width: ${normalize(30)}px;
  border-radius: ${normalize(15)}px;
`;
export const Name = styled.Text`
  font-size: ${normalize(12)}px;
  font-weight: bold;
  color: #000;
  margin-left: ${normalize(8)}px;
`;
