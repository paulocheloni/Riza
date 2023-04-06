 import {
  ContainerPoster,
  ContainerText,
  Image,
  PlayVideo,
  Post,
  TextDescriptionCard,
  TitleCard,
} from "@components/Video/VideoItem/style";
import { ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { VideoProps } from "@components/Video/VideoItem/type";
import { useVideoStore } from "../../../store/video/video.store";

export const VideoItem = (props: VideoProps) => {
  const { video, index: _index, setCurrentId, currentId, setVisible } = props;
  const { setUrlVideo } = useVideoStore() as unknown as {
    setUrlVideo: (url: string) => void;
   }  ;

  const videoId = currentId === video.id ? null : video.id;

  return (
    <Post key={video.id}>
      <ContainerPoster>
        <Image />
        <PlayVideo
          testID="play-video"
          onPress={() => {
            setCurrentId(videoId);
            setUrlVideo(video.url);
            setVisible(true);
          }}
        >
          {currentId === video.id ? (
            <ActivityIndicator color="white" size={"small"} testID="activity-indicator"/>
          ) : (
            <AntDesign name="caretright" size={24} color="black" />
          )}
        </PlayVideo>
      </ContainerPoster>
      <ContainerText>
        <TitleCard>{video.name}</TitleCard>
        <TextDescriptionCard>{video.description}</TextDescriptionCard>
      </ContainerText>
    </Post>
  );
};
