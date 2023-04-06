import { StoreApi, UseBoundStore } from "zustand";

export type VideoStore = UseBoundStore<Readonly<StoreApi<{ url: string }>>>