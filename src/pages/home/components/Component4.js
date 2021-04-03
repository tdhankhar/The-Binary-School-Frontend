import { React, useState } from "react";

import "../stylesheets/component4.scss";

import { ReactComponent as TitleIcon } from "../../../uploads/comp5.svg";

const Component4 = () => {
  const svgWidth = 1536;
  const svgHeight = 750 * (svgWidth / 1536);

  const radius = 0.015 * svgWidth;

  const s1 = [(205 / 1536) * svgWidth, (70 / 722) * svgHeight];
  const c1 = [(205 / 1536) * svgWidth, (350 / 722) * svgHeight];
  const c2 = [(1336 / 1536) * svgWidth, (70 / 722) * svgHeight];
  const e1 = [(1336 / 1536) * svgWidth, (380 / 722) * svgHeight];

  const path1 = (
    <path
      d={`
                 M ${s1}
                 C ${c1} ${c2} ${e1}
            `}
      strokeWidth={0.003 * svgWidth}
      stroke="#C4C4C4"
    />
  );

  const s2 = [(1336 / 1536) * svgWidth, (380 / 722) * svgHeight];
  const c3 = [(1336 / 1536) * svgWidth, (690 / 722) * svgHeight];
  const c4 = [(205 / 1536) * svgWidth, (400 / 722) * svgHeight];
  const e2 = [(205 / 1536) * svgWidth, (690 / 722) * svgHeight];

  const path2 = (
    <path
      d={`
                 M ${s2}
                 C ${c3} ${c4} ${e2}
            `}
      strokeWidth={0.003 * svgWidth}
      stroke="#C4C4C4"
    />
  );

  const circle1 = (
    <circle
      cx={(205 / 1536) * svgWidth}
      cy={(70 / 722) * svgHeight}
      r={radius}
      fill="#C4C4C4"
    />
  );

  const circle2 = (
    <circle
      cx={(1336 / 1536) * svgWidth}
      cy={(380 / 722) * svgHeight}
      r={radius}
      fill="#C4C4C4"
    />
  );

  const circle3 = (
    <circle
      cx={(205 / 1536) * svgWidth}
      cy={(690 / 722) * svgHeight}
      r={radius}
      fill="#C4C4C4"
    />
  );

  const title = (
    <div className="title">
      <TitleIcon className="titleLogo" />
    </div>
  );

  const svg = (
    <div>
      <div className="timeline-vectors">
        <svg
          className="timeline-svg"
          height="750"
          width="1536"
          viewBox="0 0 1536 750"
          fill="none"
        >
          {circle1}
          {path1}
          {circle2}
          {path2}
          {circle3}
        </svg>
      </div>
    </div>
  );

  const text = (
    <div className="text">
      <div className="lines">
        <div className="line-1">
          one stop solution to kickstart your journey <br />
          in the world of <span> computer science</span>
        </div>
        <div className="line-2">
          changing the<span> perspective </span>towards computers as it has{" "}
          <br />
          now become the backbone of world’s economy
        </div>
        <div className="line-3">
          <span>customizable curriculum </span> starting from basics to <br />
          developing core understanding of the concepts
        </div>
      </div>
    </div>
  );

  return (
    <div className="component4">
      <div className="head">{title}</div>
      <div className="body">
        {text}
        {svg}
      </div>
    </div>
  );
};

export default Component4;
