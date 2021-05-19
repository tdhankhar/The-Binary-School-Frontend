// react libraries
import React from "react";

// stylesheets
import "../stylesheets/video.scss";

const Video = ({ url }) => {
  return (
    <div className="video-player">
      <iframe
        className="video-iframe"
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
