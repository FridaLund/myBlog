import React from "react";
import NewPost from "../components/NewPost";
import { NewPostProvider } from "../context/NewPostContext";

const Write = () => {
    return (
      <>
      <h1>Write a new post: </h1>
      <NewPostProvider>
        <NewPost/>
        </NewPostProvider>
      </>
    );
  };
  
  
  export default Write;