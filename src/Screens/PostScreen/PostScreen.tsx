import Header from "../../components/Header/Header";
import { Container, Content, ListEmpty } from "./PostScreen.styles";
import { ActivityIndicator, FlatList, View } from "react-native";
import PostCard from "../../components/PostCard/PostCard";
import { usePostController } from "./PostScreen.controller";
import Story from "../../components/Story/Story";
import React from "react";

export default function PostScreen() {
  const { posts } = usePostController();


  return (
    <Container>
      <Header />
      <Content>
        <Story data={posts} />
        <FlatList 
         showsVerticalScrollIndicator={false}
          data={posts}
          keyExtractor={(item) => item.Post.PostId}
          testID="post-card"
          renderItem={({ item }) => 
         <PostCard
            item={item}
            data={item.Post}
            image={item.Files.FileTop?.FileURL || ''}
          />
        }
        ListEmptyComponent={
          <ListEmpty testID="loading-indicator">
            <ActivityIndicator size="large" color="#969696" />
          </ListEmpty>
        }
        />
      </Content>
    </Container>
  );
}
