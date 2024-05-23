import { createContext, useState } from "react";
import { useAuth } from './AuthContext';
import { storage } from '../firebase/firebaseConfig';

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
    }
      ];

  const addNewPost = (title, text, author) => {
    const newPost = { id: Date.now(), title, author, text };
    setPosts([...posts, newPost]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => post.id === id ? updatedPost : post));
  };

  const deleteBlog = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(blog =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : defaultPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

    return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost, addComment }}>
      <div>
      {children}
      </div>
    </PostContext.Provider>  
    );
  };
