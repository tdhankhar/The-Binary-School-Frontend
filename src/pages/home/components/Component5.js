import React from "react";
import "../stylesheets/component5.scss";
import { ReactComponent as Svg1 } from "../../../uploads/component5/problemSolving.svg";
import { ReactComponent as Svg2 } from "../../../uploads/component5/codingAptitude.svg";
import { ReactComponent as Svg3 } from "../../../uploads/component5/web&Android.svg";
import { ReactComponent as Svg4 } from "../../../uploads/component5/algorithmDesign.svg";
import { ReactComponent as Svg5 } from "../../../uploads/component5/mentorSupport.svg";
import { ReactComponent as Svg6 } from "../../../uploads/component5/industryReady.svg";

const heading1 = "PROBLEM SOLVING";
const content1 =
  "We focus on developing core problem solving skills. These skills are highly in demand and critical for getting into the software industry.";

const heading2 = "CODING APTITUDE";
const content2 =
  "Building an aptitude for the purpose of coding is important to design an efficient and reliable code.";

const heading3 = "WEB & ANDROID";
const content3 =
  "Web Dev and Android Dev are the current aspects of the industry as more and more companies are moving towards tech.";

const heading4 = "ALGORITHM DESIGN";
const content4 =
  "Re-designing complex algorithms in a simpler way is important for learning their implementation.";

const heading5 = "MENTOR SUPPORT";
const content5 =
  "Providing mentorship from engineers working in top tech companies.";

const heading6 = "INDUSTRY READY";
const content6 =
  "Preparing students to do internships in the industry in early stages of their career.";

const card = (heading, content, DisplayImage) => {
  return (
    <div className="card">
      <DisplayImage className="card-img-top card-svg" />
      <div className="card-body text-center">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

const Component5 = () => {
  return (
    <div className="component5">
      <div className="row card-row">
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading1, content1, Svg1)}
        </div>
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading2, content2, Svg2)}
        </div>
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading3, content3, Svg3)}
        </div>
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading4, content4, Svg4)}
        </div>
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading5, content5, Svg5)}
        </div>
        <div className="col-sm-6 col-lg-4 card-col">
          {card(heading6, content6, Svg6)}
        </div>
      </div>
    </div>
  );
};

export default Component5;
