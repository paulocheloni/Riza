import React from "react";

import {
  Container,
  Content,
  Footer,
  ScrollView,
  Title,
} from "./HomeScreen.styles";

import { FlatList } from "react-native";
import Header from "../../components/Header/Header";
import { data } from "./data";
import { useHomeScreenController } from "./HomeScreen.controller";
import { ModalPlayerVideo } from "../../components/Modal/Modal";
import { VideoItem } from "@components/Video/VideoItem";

export default function HomeScreen() {
  const {
    isVisible,
    setVisible,  
    setCurrentId, 
    currentId
  } = useHomeScreenController();


  return (
    <Container>
      <Header />
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <Title>Welcome</Title>}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} testID="">
              {item.videos.map((video) =>  <VideoItem   key={video.id} video={video} index={index} setCurrentId={setCurrentId} currentId={currentId} setVisible={setVisible} />)}
            </ScrollView>
          )}
          ListFooterComponent={<Footer />}
        />
      </Content>
      <ModalPlayerVideo
        isVisible={isVisible}
        setVisible={setVisible}  
        setCurrentId={setCurrentId}
      />
    </Container>
  );
}
