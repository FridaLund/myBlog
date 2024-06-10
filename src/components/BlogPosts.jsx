import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";
import Comment from "./Comment";

const BlogPosts = () => {
  const { posts, deletePost, updatePost } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const [editingPostId, setEditingPostId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleEdit = (post) => {
    setEditingPostId(post.id);
    setTitle(post.title);
    setContent(post.text);
  };

  const handleSave = (id) => {
    updatePost(id, { title, text: content });
    setEditingPostId(null);
  };

  const handleCancel = () => {
    setEditingPostId(null);
  };

  const handleDelete = (id) => {
    deletePost(id);
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="m-6 p-3 flex-col bg-gray-700">
          {editingPostId === post.id ? (
            <div className="my-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="m-2 pl-1 pt-1.5 pb-2 text-gray-900"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="m-3 pl-1 pt-1.5 pb-2 text-gray-900"
              ></textarea>
              <button
                onClick={() => handleSave(post.id)}
                className="m-3 bg-blue-900 p-2"
              >
                Save
              </button>
              <button onClick={handleCancel} className="m-3 bg-red-900 p-2">
                Cancel
              </button>
            </div>
          ) : (
            <div className="my-2">
              <h2 className="my-2">{post.title}</h2>
              <p className="my-2">Author: {post.author}</p>
              <p>{post.text}</p>
            </div>
          )}
          <div>
            <Comment postId={post.id} />
          </div>
          {currentUser && currentUser.email === post.author && (
            <div>
              <button
                onClick={() => handleEdit(post)}
                className="m-3 bg-blue-900 p-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="m-3 bg-blue-900 p-2"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default BlogPosts;
