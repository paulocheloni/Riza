import { IPostResponse, PostContent } from "src/services/posts/post.request.props"
import { instance } from "../api"

export const getAllPost = async (): Promise<PostContent[] | undefined> => {
    if (!instance.defaults.baseURL) {
      throw new Error(
        'URL_BASE is missing. Copy .env.example to .env and set URL_BASE to the posts API endpoint.'
      )
    }

    try {
      const { data } = await instance.get<IPostResponse>(
        ''
      )
      return data.payload.Posts
    } catch (error: any) {
      throw new Error(error)
    }
  }