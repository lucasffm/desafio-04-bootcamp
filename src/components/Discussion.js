import React from "react";
import Comment from "./Comment";
import Avatar from "../assets/images/Avatar.png";

const Discussion = ({ post }) => {
  return (
    <div className="discuss-container">
      <div className="discuss-info">
        <img src={post.author.avatar} alt="" />
        <div className="discuss-data">
          <span className="username">{post.author.name}</span>
          <span className="created-date">{post.date}</span>
        </div>
      </div>
      <p className="discuss-text">{post.content}</p>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Discussion;
