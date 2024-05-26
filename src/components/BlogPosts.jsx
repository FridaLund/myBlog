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
        <div key={index} className="m-6 p-3 flex-col bg-gray-700">
          <div className="my-2">
          <h2 className="my-2">{post.title}</h2>
          <p className="my-2">Author: {post.author}</p>
          <p>{post.text}</p>
          </div>
          <div>
          <Comment postId={post.id} />
          </div>
          {currentUser && currentUser.email === post.author && (
            <button onClick={() => handleDelete(post.id)} className="m-3 bg-blue-900 p-2">Delete</button>
          )}
        </div>
      ))}
    </>
  );
};

export default BlogPosts;

