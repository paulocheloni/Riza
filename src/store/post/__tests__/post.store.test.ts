import { getAllPost } from "../../../services/posts/post.request";
import { navigationRef } from "../../../helpers/navigatorRef";
import { Post } from "../../../Screens/PostScreen/Post";
import { PostContent } from "../../../services/posts/post.request.props";
import { usePostStore } from "../post.store";

jest.mock("../../../services/posts/post.request", () => ({
  getAllPost: jest.fn(),
}));

jest.mock("../../../helpers/navigatorRef", () => ({
  navigationRef: {
    current: {
      navigate: jest.fn(),
    },
  },
}));

const mockedGetAllPost = getAllPost as jest.MockedFunction<typeof getAllPost>;

const samplePost: PostContent = {
  Post: {
    PostId: "post-1",
    FirstName: "Ada",
    LastName: "Lovelace",
    DateCreated: "01/15/2024",
    Name: "Notes",
    Desc: "A short note",
  },
  Files: {
    FileTop: {
      ThumbURL: "https://example.test/thumb.jpg",
      FileURL: "https://example.test/full.jpg",
    },
  },
};

describe("usePostStore", () => {
  beforeEach(() => {
    mockedGetAllPost.mockReset();
    (navigationRef.current?.navigate as jest.Mock).mockClear();
    usePostStore.setState({
      posts: [],
      post: {} as PostContent,
      loading: true,
    });
  });

  it("stores the posts returned by the API and clears loading", async () => {
    mockedGetAllPost.mockResolvedValue([samplePost]);

    await usePostStore.getState().getAllPosts();

    expect(mockedGetAllPost).toHaveBeenCalledTimes(1);
    expect(usePostStore.getState().posts).toEqual([samplePost]);
    expect(usePostStore.getState().loading).toBe(false);
  });

  it("keeps the previous list when the request fails and still clears loading", async () => {
    usePostStore.setState({ posts: [samplePost] as unknown as Post[] });
    mockedGetAllPost.mockRejectedValue(new Error("network"));

    await expect(usePostStore.getState().getAllPosts()).resolves.toBeUndefined();

    expect(usePostStore.getState().posts).toEqual([samplePost]);
    expect(usePostStore.getState().loading).toBe(false);
  });

  it("saves the selected post and opens the detail stack", () => {
    usePostStore.getState().setPost(samplePost);

    expect(usePostStore.getState().post).toEqual(samplePost);
    expect(navigationRef.current?.navigate).toHaveBeenCalledWith(
      "DetailsScreenStack"
    );
  });
});
