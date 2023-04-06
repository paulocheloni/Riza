import React from "react";
import Header from "../../components/Header/Header";
import { Container, ContainerText, TextNamePoster } from "./DetailsScreen.styles";
import { ActivityIndicator, Text, View } from "react-native";
import { usePostController } from "./DetailsScreen.controller";
import Avatar from "../../components/Avatar/Avatar";
import {
  Description,
  PostCardImage,
  PostImage,
} from "../../components/PostCard/PostCard.styles";
import { Name } from "../../components/Header/Header.styles";
import dayjs from "dayjs";
export default function DetailsScreen() {
  const { post } = usePostController();

  return (
    <Container>
      <Header />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          paddingTop: 20,
        }}
      >
        <Avatar
          avatarUrl={post?.Files?.FileTop?.ThumbURL}
          userName={post.Post?.FirstName}
          lastName={post.Post?.LastName}
        />

        <PostCardImage>
          {post?.Files?.FileTop && (
            <PostImage
              source={{
                uri: post.Files.FileTop?.FileURL,
              }}
              resizeMode="cover"
                testID="post-image"
            />
          )}
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{
              position: "absolute",
              zIndex: 1,
            }}
            testID="activity-indicator"
          />
        </PostCardImage>
        <ContainerText   >
          <View>
            <Name testID="full-name">
              {post?.Post?.FirstName} {post?.Post?.LastName}
            </Name>
            <TextNamePoster testID="name">{post?.Post?.Name}</TextNamePoster>
          </View>
          <Text>{dayjs(post?.Post?.DateCreated, 'MM/DD/YYYY').fromNow()}</Text>

          <Description>{post?.Post?.Desc}</Description>
        </ContainerText>
      </View>
    </Container>
  );
}
