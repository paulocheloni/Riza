import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: grey;
`;

export const Content = styled.View`
  background-color: white;
  padding-bottom: ${normalize(100)}px;
  height: 100%;
`

export const ListEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%;
`