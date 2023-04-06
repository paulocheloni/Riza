import React from 'react';
import { render } from '@testing-library/react-native';
import Story from '../Story';

describe('Story', () => {
  const postContentMock = [
    {
      Post: {
        PostId: 'post-id-1',
        FirstName: 'string',
        LastName: 'string',
        DaysAgo: 1,
        Name: 'string',
        Desc: 'string' ,
        FileURL: 'string' ,
      },
      Files: {
        FileTop: {
          ThumbURL: 'https://example.com/image1.jpg',
        },
      },
    },
    {
      Post: {
        PostId: 'post-id-2',
        FirstName: 'string',
        LastName: 'string',
        DaysAgo: 1,
        Name: 'string',
        Desc: 'string' ,
        FileURL: 'string' ,
      },
      Files: {
        FileTop: {
            ThumbURL: 'https://example.com/image2.jpg',
        }
      },
    },
    {
      Post: {
        PostId: 'post-id-3',
        FirstName: 'string',
        LastName: 'string',
        DaysAgo: 1,
        Name: 'string',
        Desc: 'string' ,
        FileURL: 'string' ,
        

      } ,
      Files: {
        FileTop: {
          ThumbURL: 'https://example.com/image3.jpg',
        },
      },
    },
  ];

  it('renders the correct number of story avatars', () => {
    const { getAllByTestId } = render(<Story data={postContentMock} />);
    const avatars = getAllByTestId('avatar');
    expect(avatars).toHaveLength(3);
  });

  it('renders the correct image sources', () => {
    const { getAllByTestId } = render(<Story data={postContentMock} />);
    const avatars = getAllByTestId('avatar');
    expect(avatars[0].props.source.uri).toBe('https://example.com/image1.jpg');
    expect(avatars[1].props.source.uri).toBe('https://example.com/image2.jpg');
  });
});