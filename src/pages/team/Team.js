// react libraries
import React from "react";

import "./stylesheets/team.scss";

// components
import { ReactComponent as SVG } from "../../uploads/under_development.svg";

const Team = () => {
  return (
    <div className="team">
      <div className="filler">
        <SVG className="under-dev-svg" />
        <div className="info">Loading...</div>
      </div>
    </div>
  );
};

export default Team;
