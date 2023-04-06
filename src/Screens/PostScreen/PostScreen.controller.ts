import  { useEffect } from "react"
import { usePostStore } from "../../store/post/post.store"
import { PostContent } from "src/services/posts/post.request.props"

export const usePostController = () => {
    const { posts, getAllPosts } = usePostStore() as unknown as  { posts : PostContent[], getAllPosts: () => void }
    useEffect(() => { 
      void  getAllPosts()
    }, [ ])
 

    return {
        posts
    }
}