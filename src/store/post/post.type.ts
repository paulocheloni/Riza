import { PostContent } from "src/services/posts/post.request.props";
import { StoreApi, UseBoundStore } from "zustand";

export type PostStore = UseBoundStore<Readonly<StoreApi<{ posts: Post[], post: PostContent, loading: boolean }>>>