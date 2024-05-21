import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Comment from "../components/Comment";

const BlogPosts = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>{post.text}</p>
          <h3>Comments:</h3>
          <Comment postId={post.id}/>
        </div>
      ))}
    </>
  );
};

export default BlogPosts;
