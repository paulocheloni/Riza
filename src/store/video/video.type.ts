import { StoreApi, UseBoundStore } from "zustand";

export type VideoState = {
    url: string;
    setUrlVideo: (url: string) => void;
};

export type VideoStore = UseBoundStore<Readonly<StoreApi<VideoState>>>;