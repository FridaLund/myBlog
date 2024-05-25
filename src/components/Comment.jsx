import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext'; 
import { AuthContext } from '../context/AuthContext';

const Comments = ({ postId }) => {
  const { posts, addComment } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { author: currentUser.email, text: commentText });
    setCommentText('');
  };

  const post = posts.find(post => post.id === postId);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {post.comments.map((comment, index) => (
          <li key={index}><strong>{comment.author}</strong>: {comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
