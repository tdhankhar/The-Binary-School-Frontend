// react libraries
import React from "react";

import "../stylesheets/component7.scss";

// components
import Video from "../../../core/helper/Video.js";
import { ReactComponent as SVG7 } from "../../../uploads/hashtag_svg.svg";

const Component7 = () => {
  return (
    <div className="component7">
      <div className="hash-tag">
        <span className="hash">#</span>
        <span className="text">BringTheChange</span>
      </div>
      <div className="content">
        <div className="svg7-box">
          <SVG7 className="svg7" />
        </div>
        <div className="video-wrapper">
          <Video url="https://player.vimeo.com/video/117709376" />
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default Component7;
