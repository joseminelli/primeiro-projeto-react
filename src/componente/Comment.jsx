import React, { useState } from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <h2>{props.author.name}</h2>
        <h3>{props.text}</h3>
        <p>{formatDate(props.date)}</p>
      </div>
      <img src={props.author.avatarUrl} alt={props.author.name} />
    </div>
  );
}

export default Comment;
