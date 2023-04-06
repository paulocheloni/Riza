import { normalize } from "@utils/normalize";
import styled from "styled-components/native";

export const Post = styled.View`
  height: ${normalize(120)}px;
  background: #f0f0f0;
  margin: ${normalize(16)}px;
  width: ${normalize(200)}px;
  border-radius: ${normalize(10)}px;
  flex-direction: row;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  shadow-opacity: 0.5;
  shadow-offset: 0 2px;
  shadow-radius: 5px;
  elevation: 10;
`;

export const ContainerPoster = styled.View`
  align-content: center;
  align-items: center;
  justify-content: center;
  width: ${normalize(80)}px;
  height: ${normalize(120)}px;
  border-radius: ${normalize(10)}px;
`;

export const ContainerText = styled.View`
  width: 50 %;
  padding: ${normalize(10)}px;
`;

export const PlayVideo = styled.TouchableHighlight`
  width: ${normalize(50)}px;
  height:${normalize(50)}px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  border-radius: ${normalize(25)}px;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image.attrs({
  source: require("../../../../assets/thumb.png"),
})`
  width: ${normalize(80)}px;
  height: ${normalize(120)}px;
  border-radius: ${normalize(10)}px;
`;

export const TitleCard = styled.Text`
  font-size: ${normalize(16)}px;
  font-weight: bold;
`;

export const TextDescriptionCard = styled.Text`
  font-size: ${normalize(12)}px;
  color: grey;
`;
