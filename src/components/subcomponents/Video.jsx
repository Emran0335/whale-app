import React from "react";
import "../../style/layout.css";

const Video = ({ title, id, noq }) => {
  return (
    <div>
      <div className="video">
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt="title"
        />
        <p>{title}</p>
        <div className="questions">
          <p>{noq} questions</p>
          <p>Total Points: {noq * 5}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
