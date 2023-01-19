import { useState, useEffect } from 'react';
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = ({ commentId }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(`/comments/${commentId}/status`);
      const data = await response.json();
      setLikes(data.likes);
      setIsLiked(data.isLiked);
    })();
  }, [commentId]);
  
  const handleClick = async () => {
    const response = await fetch(`/comments/${commentId}/like`, {
      method: 'PUT',
    });
    if (response.ok) {
      setIsLiked(!isLiked);
      setLikes(isLiked ? likes - 1 : likes + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isLiked ? <FaThumbsUp style={{color: 'blue'}} /> : <FaThumbsUp />}
      </button>
      <p>{likes} likes</p>
    </div>
  );
};

export default LikeButton;
