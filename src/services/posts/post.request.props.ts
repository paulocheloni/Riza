export type IPostResponse = {
        payload: {
            Posts: PostContent[]
        }
}

/**
 * Post related info from API
 */
export type PostContent = {
    Files: {
        FileTop: {
            ThumbURL?: string
            FileURL?: string
        }
    },
    Post: Post
}