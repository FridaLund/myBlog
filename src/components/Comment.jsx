import React, { useState, useEffect } from "react";

const Comment = ({ postId }) => {
  const getInitialComments = () => {
    const list = localStorage.getItem(`comments_${postId}`);
    const savedComments = JSON.parse(list);
    if (savedComments === null) {
      return [];
    } 
    return savedComments;
  }; 

  const [comments, setComments] = useState(getInitialComments());
  const [commentInput, setCommentInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");

  const addComment = () => {
    if (commentInput.trim() !== "" && usernameInput.trim() !== "") {
      setComments([...comments, { text: commentInput, username: usernameInput }]);
      setCommentInput("");
      setUsernameInput("");
    }
  };

  const removeComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  useEffect(() => {
    localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
  }, [comments, postId]);


  return (
    <div className="commentSection">

      <div className="addComment">
        <input
          type="text"
          placeholder="Your name"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={addComment}>Add comment</button>
      </div>

      <div className="commentList">
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <span>{comment.username}:</span> {comment.text}
              <div>
                <button onClick={() => removeComment(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ); 
}

export default Comment;