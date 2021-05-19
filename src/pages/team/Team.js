// react libraries
import React from "react";

import "./stylesheets/team.scss";

// components
import tarun_profile_pic from "../../uploads/tarun_profile_pic.png";
import gaurav_profile_pic from "../../uploads/gaurav_profile_pic.png";
import sambhav_profile_pic from "../../uploads/sambhav_profile_pic.png";
import { ReactComponent as TeamHeroSVG } from "../../uploads/team_hero_svg.svg";
import { ReactComponent as LinkedinIcon } from "../../uploads/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../uploads/github.svg";

const Team = () => {
  return (
    <div className="team">
      <TeamHeroSVG className="team-hero-svg" />
      <div className="team-card row">
        <div className="col-md-8 order-2 order-md-1 profile-info">
          <div className="team-card-head">
            <span className="name">Tarun Dhankhar</span> |{" "}
            <span>Co-Founder</span>
          </div>
          <div className="team-card-body text-justify">
            Tarun holds a bachelor’s degree in Information Technology from NSIT,
            Delhi. He has interned at Visa Inc. during his graduation and is now
            working as a full time software engineer at Urban Company. He has
            worked on cutting edge technologies in the areas of software
            development and artificial intelligence. He is a software enthusiast
            and a passionate programmer who wants to share his knowledge and
            experience with young minds
          </div>
          <div className="team-card-contact">
            <LinkedinIcon className="linkedin-icon" />
            <GithubIcon className="github-icon" />
          </div>
        </div>
        <div className="col-md-4 order-1 order-md-2 profile-img">
          <img className="team-card-img" src={tarun_profile_pic} />
        </div>
      </div>
      <div className="team-card row">
        <div className="col-md-4 order-1 profile-img">
          <img className="team-card-img" src={gaurav_profile_pic} />
        </div>
        <div className="col-md-8 order-2 profile-info">
          <div className="team-card-head">
            <span className="name">Gaurav Agrawal</span> |{" "}
            <span>Co-Founder</span>
          </div>
          <div className="team-card-body text-justify">
            Gaurav holds a bachelor’s degree in Information Technology from
            NSIT, Delhi. He has interned at Cure.Fit during his graduation and
            is now working as a full time software engineer at Cure.Fit. He has
            worked on cutting edge technologies in the areas of software
            development and artificial intelligence. He is a software enthusiast
            and a passionate programmer who wants to share his knowledge and
            experience with young minds
          </div>
          <div className="team-card-contact">
            <LinkedinIcon className="linkedin-icon" />
            <GithubIcon className="github-icon" />
          </div>
        </div>
      </div>
      <div className="team-card row">
        <div className="col-md-8 order-2 order-md-1 profile-info">
          <div className="team-card-head">
            <span className="name">Sambhav Jain</span> | <span>Co-Founder</span>
          </div>
          <div className="team-card-body text-justify">
            Sambhav holds a bachelor’s degree in Information Technology from
            NSIT, Delhi. He has interned at Indus Valley Partners during his
            graduation and is now working as a full time software engineer at
            Pickrr. He has worked on cutting edge technologies in many areas of
            software development. He is a software enthusiast and a passionate
            programmer who wants to share his knowledge and experience with
            young minds
          </div>
          <div className="team-card-contact">
            <LinkedinIcon className="linkedin-icon" />
            <GithubIcon className="github-icon" />
          </div>
        </div>
        <div className="col-md-4 order-1 order-md-2 profile-img">
          <img className="team-card-img" src={sambhav_profile_pic} />
        </div>
      </div>
    </div>
  );
};

export default Team;
