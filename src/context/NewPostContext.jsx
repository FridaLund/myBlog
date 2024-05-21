import { createContext, useState } from "react";

export const NewPostContext = createContext();

export const NewPostProvider = (props) => {
  const [newPosts, setNewPosts] = useState([]);

  const addNewPost = (post) => {
    setNewPosts([...newPosts, post]);
  };

  return (
    <NewPostContext.Provider value={{ newPosts, addNewPost }}>
      {props.children}
    </NewPostContext.Provider>
  );
};
