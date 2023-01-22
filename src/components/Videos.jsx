import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import "../style/layout.css";
import Video from "./subcomponents/Video";

const Videos = () => {
  const { loading, error, videos } = useVideoList();

  return (
    <div>
      <div className="videos">
      {videos.map((video) =>
        video.noq > 0 ? (
          <Link
            to={`/quiz/${video.youtubeID}`}
            state={{ videoTitile: video.title }}
            key={video.youtubeID}
          >
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ) : (
          <Video
            title={video.title}
            id={video.youtubeID}
            noq={video.noq}
            key={video.youtubeID}
          />
        )
      )}
      </div>
    </div>
  );
};

export default Videos;
