import { create } from "zustand";
import { VideoStore } from "src/store/video/video.type";

const initialState = {
   url :''
};

export const useVideoStore: VideoStore = create((set) => ({
  ...initialState,
  setUrlVideo:   (url:string) => {
    set({ url: url });
  },

}));
