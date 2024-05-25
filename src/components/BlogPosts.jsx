import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from '../context/AuthContext';
import Comment from "./Comment";

const BlogPosts = () => {
  const { posts, deletePost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);

  console.log("User:", currentUser);
  console.log("Posts:", posts);

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>{post.text}</p>
          <Comment postId={post.id}/>
          {currentUser && currentUser.username === post.author && (
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          )}
        </div>
      ))}
    </>
  );
};

export default BlogPosts;

