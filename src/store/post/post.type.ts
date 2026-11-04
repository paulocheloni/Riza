import { Post } from "../../Screens/PostScreen/Post";
import { PostContent } from "src/services/posts/post.request.props";
import { StoreApi, UseBoundStore } from "zustand";

export type PostState = {
    posts: Post[];
    post: PostContent;
    loading: boolean;
    getAllPosts: () => Promise<void>;
    setPost: (postContent: PostContent) => void;
};

export type PostStore = UseBoundStore<Readonly<StoreApi<PostState>>>;