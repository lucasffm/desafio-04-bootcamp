import React from "react";
import Avatar from "../assets/images/Avatar.png";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <img src={comment.author.avatar} alt="" />
      <div className="comment-balloon">
        <p>
          <strong>{comment.author.name} </strong>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores dolorem ex laboriosam facilis
          facere, quia culpa dolorum, nemo illum est nulla dolore, obcaecati
          enim sed exercitationem a neque blanditiis quam.
        </p>
      </div>
    </div>
  );
};

export default Comment;
