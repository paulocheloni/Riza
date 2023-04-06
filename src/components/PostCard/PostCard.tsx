import {
  Container,
  PostImage,
  PostCardImage,
  Name,
  Description,
  ContainerPoster,
  TextNamePoster,
  ContainerText,
} from "./PostCard.styles";
import { View } from "react-native";
import Avatar from "../Avatar/Avatar";
import { usePostStore } from "../../store/post/post.store";
import { PostCardProps } from "@components/PostCard/type";
import React from "react"; 
import { PostContent } from "src/services/posts/post.request.props";

export default function PostCard({ item, data, image }: PostCardProps) {
  const {setPost} = usePostStore() as unknown as {setPost: (item: PostContent) => void}

  return (
    <Container
      testID="post-card"
      onPress={() => {
        setPost(item);
      }}
    >
      <ContainerPoster>
        <Avatar
          avatarUrl={item?.Files?.FileTop?.ThumbURL}
          userName={data?.FirstName}
          lastName={data?.LastName}
        />
        <PostCardImage>
          {image && (
            <PostImage
              source={{
                uri: image,
              }}
              resizeMode="cover"
              testID="post-image"
            />
          )} 
        </PostCardImage>
        <ContainerText>
             <View>
          <Name testID="full-name">
            {data?.FirstName} {data?.LastName}
          </Name>
          <TextNamePoster testID="name">{data?.Name}</TextNamePoster>
          </View>
          <Description>{data?.Desc}</Description>
        </ContainerText>
      </ContainerPoster>
    </Container>
  );
}
