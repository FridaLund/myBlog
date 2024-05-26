import React, { useContext, useState } from 'react';
import { PostContext } from '../context/PostContext'; 
import { AuthContext } from '../context/AuthContext';

const Comments = ({ postId }) => {
  const { posts, addComment, deleteComment} = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { author: currentUser.email, text: commentText });
    setCommentText('');
  };

  const handleDeleteComment = (commentIndex) => {
    deleteComment(postId, commentIndex);
  };

  const post = posts.find(post => post.id === postId);

  return (
    <div>
      <h3>Comments</h3>
      <div>
      {post.comments.map((comment, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <strong>{comment.author}</strong>
          <div>{comment.text}</div>
          {comment.author === currentUser.email && (
              <button onClick={() => handleDeleteComment(index)}>Delete comment</button>
            )}
        </div>
      ))}
    </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Share your thoughts.."
        />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default Comments;
