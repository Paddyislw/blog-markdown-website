import React, { useState } from "react";
import "../markdown.css";
import ReactMarkdown from "react-markdown";

const MarkDownReact = () => {
  const [markDown, setMarkDown] = useState("Welcome To Markdown");

  const textChangeHandler = (e) => {
    setMarkDown(e.target.value);
  };

  return (
    <div className="container">
      <textarea
        className="left"
        value={markDown}
        onChange={textChangeHandler}
      ></textarea>
      <div className="right">
        <ReactMarkdown children={markDown} />
      </div>
    </div>
  );
};

export default MarkDownReact;
