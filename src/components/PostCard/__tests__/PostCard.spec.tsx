import React from 'react';
import { render } from '@testing-library/react-native';
import PostCard from '../PostCard';
import { PostContent } from "../../../services/posts/post.request.props";


describe('PostCard', () => {
  const item: PostContent = {
    Post: {
        PostId: '1',
        FirstName: 'John',
        LastName: 'Doe',
        Name: 'My Post',
        Desc: 'My post description' as string,
        Datecreated: '2021-01-01' as string,  
    } ,
    Files: {
        FileTop: {
            FileURL: 'https://example.com/my-image.jpg',
            ThumbURL: 'https://example.com/my-image.jpg',
        }
    }
  };
  const data = item.Post;
  const image = 'https://example.com/my-image.jpg';

  test('renders correctly', () => {
    const { getByTestId } = render(
      <PostCard item={item} data={data} image={image} />
    );

    expect(getByTestId('post-card')).toBeDefined();
    expect(getByTestId('full-name')).toBeDefined();
    expect(getByTestId('name')).toBeDefined();
   
    expect(getByTestId('post-image')).toBeDefined();
   
  });

  
});