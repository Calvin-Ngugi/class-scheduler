import React from "react";
import LikeButton from "./LikeButton";

function Comments({ comments }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-2 mb-4 resize">
        <div className="card-header">
          <h5 className="card-title">{comments.user.username}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{comments.content}</p>
          <LikeButton commentId={comments.id}/>
        </div>
      </div>
    </div>
  );
}

export default Comments;
