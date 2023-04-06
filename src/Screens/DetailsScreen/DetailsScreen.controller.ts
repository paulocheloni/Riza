 import { usePostStore } from "../../store/post/post.store"

export const usePostController = () => {
    const { post } = usePostStore()
 
    return {
      post
    }
}