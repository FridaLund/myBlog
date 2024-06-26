import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

export const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const { currentUser } = useAuth();

  const firstPost = [
    {
      id: 1,
      title: "En dag i skogen",
      author: "Jane Doe",
      text: "Idag tog jag en härlig promenad i skogen. Naturen var så vacker och lugnande.",
      comments: [],
    },
  ];

  const addNewPost = (title, text) => {
    const newPost = {
      id: Date.now(),
      title,
      author: currentUser.email,
      text,
      comments: [],
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const updatePost = (postId, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, ...updatedPost } : post
      )
    );
  };

  const getPostById = (postId) => {
    return posts.find((post) => post.id === postId);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const deleteComment = (postId, commentIndex) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (_, index) => index !== commentIndex
              ),
            }
          : post
      )
    );
  };

  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");

    return storedPosts ? JSON.parse(storedPosts) : firstPost;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider
      value={{
        posts,
        currentUser,
        addNewPost,
        updatePost,
        getPostById,
        deletePost,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
