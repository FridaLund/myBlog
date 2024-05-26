import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import BlogPost from './BlogPost';

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="m-6">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;