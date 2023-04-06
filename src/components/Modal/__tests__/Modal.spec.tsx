import React from 'react';
import { render, } from '@testing-library/react-native';
import { Video } from 'expo-av';
import { ModalPlayerVideo } from '../Modal';


describe('ModalPlayerVideo', () => {
  const mockSetVisible = jest.fn();
  const mockSetCurrentId = jest.fn();
  const mockRef = React.createRef() as React.MutableRefObject<Video>;
  const mockIsUrl = 'https://example.com/video.mp4';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a modal with a video player', async () => {


    
    const mockVideoRef = { current: { presentFullscreenPlayer: jest.fn() } };


    const { getByTestId } = render(
      <ModalPlayerVideo
        isVisible={true}
        setVisible={mockSetVisible}
        setCurrentId={mockSetCurrentId}
      />
    );

    const modal = getByTestId('modal');
    

    expect(modal).toBeDefined();
    expect(mockVideoRef.current).toBeDefined();
  });

  
});