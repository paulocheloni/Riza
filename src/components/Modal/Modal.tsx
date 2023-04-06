import { Modal } from "react-native";
import { ContainerModal, styles } from "./Modal.styles";
import { ResizeMode, Video } from "expo-av";
import { IModal } from "./Modal.props";
import React, { MutableRefObject, useRef } from "react";
import { useVideoStore } from "../../store/video/video.store";

export const ModalPlayerVideo = ({
  isVisible,
  setVisible,
  setCurrentId,
}: IModal) => {
  const video = useRef(null) as MutableRefObject<Video | null>;
  const { url } = useVideoStore();
 
  return (
    <Modal
      testID="modal"
      visible={isVisible}
      transparent     
    >
      <ContainerModal>
        <Video
          source={{
            uri: url,
          }}
          testID="video"
          ref={video}
          style={styles.fullscreenVideo}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          shouldPlay
          useNativeControls
          onError={() => {
            setVisible(false);
            setCurrentId("");
          }}
          onFullscreenUpdate={(status) => {
            if (status.fullscreenUpdate === 3) {
              setVisible(false);
            }
          }}
          onLoad={() => {
            setCurrentId("");
            video?.current?.presentFullscreenPlayer();
          }}
        />
      </ContainerModal>
    </Modal>
  );
};
