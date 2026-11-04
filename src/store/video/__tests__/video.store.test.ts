import { useVideoStore } from "../video.store";

describe("useVideoStore", () => {
  beforeEach(() => {
    useVideoStore.setState({ url: "" });
  });

  it("starts with an empty clip URL", () => {
    expect(useVideoStore.getState().url).toBe("");
  });

  it("stores the clip URL the player should open", () => {
    const url = "https://example.test/clip.m3u8";

    useVideoStore.getState().setUrlVideo(url);

    expect(useVideoStore.getState().url).toBe(url);
  });
});
