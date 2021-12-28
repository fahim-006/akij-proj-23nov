import React from "react";
import "./Title.scss";
function Title(props) {
  return (
    <div className="title">
      <div className="title__underline">
        <h1>{props.title}</h1>
        <div className="underline__one"></div>
        <div className="underline__two"></div>
      </div>
    </div>
  );
}

export default Title;
