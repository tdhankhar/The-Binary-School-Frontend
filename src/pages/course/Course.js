// react libraries
import React from "react";

import "./stylesheets/course.scss";

// components
import { ReactComponent as SVG } from "../../uploads/under_development.svg";

const Course = () => {
  return (
    <div className="course">
      <div className="filler">
        <SVG className="under-dev-svg" />
        <div className="info">Loading...</div>
      </div>
    </div>
  );
};

export default Course;
