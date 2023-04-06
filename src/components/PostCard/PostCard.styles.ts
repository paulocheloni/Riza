import styled from 'styled-components/native';
import { normalize } from "@utils/normalize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  border-bottom-end-radius: 20px;
  border-bottom-start-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    background-color: #fff;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
`;
export const ContentText = styled.View`
  margin-left: 8px;
`;

export const Hi = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
`;

export const PostCardImage = styled.View`
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 100%;
  background: #fff; 
  z-index:9999;
`;
export const Description = styled.Text``;

export const ContainerPoster = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const TextNamePoster = styled.Text`
  font-size:  ${normalize(12)}px;
  margin-top:  ${normalize(8)}px;
`

export const ContainerText = styled.View`
  margin-top: ${normalize(10)}px;
  margin-left: ${normalize(10)}px;
`;
