import React, { useState } from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment({author, text, date}){
  return (
    <div className="Comment">
      <div className="UserInfo">
        <h2>{author.name}</h2>
        <h3>{text}</h3>
        <p>{formatDate(date)}</p>
      </div>
      <img src={author.avatarUrl} alt={author.name} />
    </div>
  );
}

export default Comment;
