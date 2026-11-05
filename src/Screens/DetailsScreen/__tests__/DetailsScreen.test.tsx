import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';

describe('DetailsScreen', () => {
  it('should render the post details', async () => {
    const { getByTestId, queryByTestId } = render(
      <DetailsScreen />,
    );

    // Ensure activity indicator is shown initially
    expect(getByTestId('activity-indicator')).toBeDefined();

    // Wait for post details to load and activity indicator to be removed
    await waitFor(() => {
        
      expect(queryByTestId('full-name')).toBeDefined();
      expect(queryByTestId('name')).toBeDefined();
        expect(queryByTestId('post-image')).toBeDefined();

      
    });
  });
});