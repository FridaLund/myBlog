import React from "react";
import NewPost from "../components/NewPost";

const Write = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold">Write a new post: </h1>
        <NewPost />
      </div>
    </>
  );
};

export default Write;
