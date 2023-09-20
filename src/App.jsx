import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./componente/Card1";
import Comment from "./componente/Comment";

const comment = {
  date: new Date(),
  text: "Teste de uso",
  author: {
    name: "José Minelli",
    avatarUrl:
      "https://media.discordapp.net/attachments/933499827638124575/1146978949382033558/IMG_8499_jpg.JPG?width=671&height=671",
  },
};

function App() {
  return (
    <>
      <div className="content">
        <Card1 min={1} max={60}>
          {" "}
        </Card1>
        <div className="comments">
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
            <Comment
              date={comment.date}
              text={comment.text}
              author={comment.author}
            />
        </div>
      </div>
    </>
  );
}

export default App;
