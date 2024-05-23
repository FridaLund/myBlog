import React, { useContext, useState } from 'react';
import { PostProvider } from '../context/PostContext';
import { AuthProvider } from '../context/AuthContext';

const Comments = ({ postId }) => {
  const { posts, addComment } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { author: user.username, text: commentText });
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


/* const Comment = ({ postId }) => {
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

export default Comment; */