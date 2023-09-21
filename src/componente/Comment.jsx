import React, { useState, useEffect } from "react";

function Refresh() {
  window.location.reload();
}

function Comment() {
  useEffect(() => {
    const comentarios = document.querySelectorAll(".Comment");
    comentarios.forEach((element) => {
      element.addEventListener("click", function (event) {
        if (event.target.className === "del") {
          DelComment(event.target.id);
          console.log(event.target.id);
        }
      });
    });
  }, []);

  let comments = localStorage.getItem("comments");
  if (!comments) {
    comments = [];
  } else {
    comments = JSON.parse(comments);
  }

  return (
    <>
      {comments.map((comment, index) => (
        <div className="Comment" key={index}>
          <div id="DelDiv">
            <span className="del" id={comment.id}>
              &times;
            </span>
          </div>
          <div className="UserInfo">
            <h2>{comment.nome}</h2>
            <h3>{comment.text}</h3>
            <p>{comment.date}</p>
          </div>
          <img src={comment.url} alt={comment.nome} />
        </div>
      ))}
    </>
  );
}

function DelComment(id) {
  let comments = localStorage.getItem("comments");
  if (!comments) {
    comments = [];
  } else {
    comments = JSON.parse(comments);
  }
  console.log(comments);
  comments.splice(id, 1);
  console.log(comments);
  localStorage.setItem("comments", JSON.stringify(comments));
}

export default Comment;
