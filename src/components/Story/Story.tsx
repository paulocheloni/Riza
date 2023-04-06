import React from "react";
import { Container, Avatar, ContainerAvatar } from "./Story.styles";

import { FlatList, View } from "react-native";
import { PostContent } from "src/services/posts/post.request.props";
import { normalize } from "@utils/normalize";
export default function Story({ data }: {data: PostContent[]}) {
  return (
    <Container>
      <FlatList
        contentContainerStyle={{
          justifyContent: "space-between",   
        }} 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.Post.PostId}
        renderItem={({ item }) => (
          <ContainerAvatar>
            {item.Files.FileTop ? (
              <Avatar
                testID="avatar"
                source={{
                  uri: item.Files.FileTop.ThumbURL,
                }}
              />
            ) : null} 
          </ContainerAvatar>
        )}
        ListFooterComponent={  <View style={{ height: normalize(300), width:normalize(200)  }}  />}
      />
    </Container>
  );
}
