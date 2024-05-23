import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { AuthContext } from '../context/AuthContext';

const BlogPost = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.text}</p>
      {user.username === post.author && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default BlogPost;