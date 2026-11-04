import { URL_BASE } from "react-native-dotenv";
import { instance } from "../api";
import { getAllPost } from "../posts/post.request";

describe("posts API client", () => {
  it("uses URL_BASE from react-native-dotenv as the Axios base URL", () => {
    expect(URL_BASE).toBe("https://example.test/api/posts");
    expect(instance.defaults.baseURL).toBe(URL_BASE);
  });

  it("refuses to request posts when URL_BASE was not applied", async () => {
    const previous = instance.defaults.baseURL;
    instance.defaults.baseURL = "";

    try {
      await expect(getAllPost()).rejects.toThrow(/URL_BASE is missing/);
    } finally {
      instance.defaults.baseURL = previous;
    }
  });
});
