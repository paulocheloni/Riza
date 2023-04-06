import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { useHomeScreenController } from "../../../../Screens/HomeScreen/HomeScreen.controller";
import { VideoItem } from "../index";

const mockUseHomeScreenController = useHomeScreenController as jest.MockedFunction<typeof useHomeScreenController>;

jest.mock("@Screens/HomeScreen/HomeScreen.controller", () => ({
  useHomeScreenController: jest.fn(() => ({
    setVisible: jest.fn(),
    loading: null,
    setUrl: jest.fn(),
    setLoading: jest.fn()
  }))
}));

describe("VideoItem", () => {
  const video = {
    id: '1',
    name: "Video Name",
    description: "Video Description",
    url: "https://example.com/video.mp4"
  };
  const index = 0;
  const setVisible = jest.fn();
  const setCurrentId = jest.fn();



  it("should render video name and description", () => {
    const { getByText } = render(<VideoItem video={video} index={index}
        setCurrentId={ setCurrentId }
        setVisible={ setVisible }
        currentId={ null }


    
    />);
    expect(getByText(video.name)).toBeTruthy();
    expect(getByText(video.description)).toBeTruthy();
  });

  it("should call setLoading and setUrl on PlayVideo press", async () => {
    
    

    const { getByTestId } = render(<VideoItem video={video} index={index}
        setCurrentId={ setCurrentId }
        setVisible={ setVisible }
        currentId={ null }
         />);
    const playVideo = getByTestId("play-video");
    fireEvent.press(playVideo);

    await waitFor(() => {
        expect(setVisible).toBeCalledWith(true);
        expect(setCurrentId).toBeCalledWith(video.id);

        }
    )

    

        
    
  });

    it("setting current id should trigger activity indicator", async () => {
        
        const { getByTestId } = render(<VideoItem video={video} index={index}  
            setCurrentId={ setCurrentId }
            setVisible={ setVisible }
            currentId={ video.id }
             />);
        const playVideo = getByTestId("play-video");
        fireEvent.press(playVideo);
    
        await waitFor(() => {
            expect(getByTestId('activity-indicator')).toBeTruthy();
            }
        )
    
        
    
            
      })

    it('initially should not trigger activity indicator', async () => {
        const { getByTestId } = render(<VideoItem video={video} index={index}  
            setCurrentId={ setCurrentId }
            setVisible={ setVisible }
            currentId={ null }
             />);
        const playVideo = getByTestId("play-video");
        fireEvent.press(playVideo);
    
        expect(() => getByTestId('activity-indicator')).toThrow();
    })
    
});