
import React, { useContext, useState } from "react";
import { NewPostContext } from "../context/NewPostContext";


const NewPost = () => {
  const {addNewPost} = useContext(NewPostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content};
    addNewPost (newPost);
    setTitle("");
    setContent("");
  };

    return (
     <div>
     <h1>New Post</h1>

     <form onSubmit={handleSubmit}>
        
     <input 
     type="text" 
     placeholder="title" 
     value={title} 
     onChange={(e) => setTitle(e.target.value)}
     />

     <textarea 
     placeholder="Content"
     value={content}
     onChange={(e) => setContent(e.target.value)}
     ></textarea>

     <button type="submit">Post</button>
    </form>

     </div>
    ); 
  }
  
  export default NewPost;