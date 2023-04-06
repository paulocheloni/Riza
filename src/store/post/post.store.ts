import { create } from "zustand";
import { getAllPost } from "../../services/posts/post.request";
import { navigationRef } from "../../helpers/navigatorRef";
import { PostContent } from "src/services/posts/post.request.props";
import { PostStore } from "src/store/post/post.type";

const initialState = {
    posts: [] as Post[],
    post: {} as PostContent,
    loading: false
};

export const usePostStore: PostStore = create((set) => ({
    ...initialState,
    getAllPosts: async () => {
        try {
            const posts = await getAllPost() as unknown as Post[];
            set({ posts: posts });
        } catch (error) {
        }
        finally {
            set({ loading: false });
        }
    },

    setPost: (postContent: PostContent): void => {
        
        set({ post: postContent });
        navigationRef.current?.navigate("DetailsScreenStack");
    },
}));
