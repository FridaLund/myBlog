
import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const NewPost = () => {
  const {addNewPost} = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost(title, content);
    setTitle("");
    setContent("");
  };

    return (
     <div className="flex-col">
        <div className="flex-col">
        <form onSubmit={handleSubmit}>

        <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="m-2 pl-1 pt-1.5 pb-2 text-gray-900"
        />

        <textarea 
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="m-3 pl-1 pt-1.5 pb-2 text-gray-900"
        ></textarea>

        <button type="submit" className="m-3 bg-blue-900 p-2">Post</button>
        </form>
        </div>

     </div>
    ); 
  }
  
  export default NewPost;