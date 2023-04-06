import { IPostResponse, PostContent } from "src/services/posts/post.request.props"
import { instance } from "../api"

export const getAllPost = async (): Promise<PostContent[] | undefined> => {
    try {
      const { data } = await instance.get<IPostResponse>(
        ''
      )
      return data.payload.Posts
    } catch (error: any) {
      throw new Error(error)
    }
  }