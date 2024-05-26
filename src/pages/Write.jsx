import React from "react";
import NewPost from "../components/NewPost";

const Write = () => {
    return (
      <>
      <div className="flex-col">
      <h1 className="ml-6 font-bold">Write a new post: </h1>
        <NewPost/>
        </div>
      </>
    );
  };
  
  
  export default Write;