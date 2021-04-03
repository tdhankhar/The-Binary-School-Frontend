// react libraries
import { React, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

// stylesheets
import "./stylesheets/footer.scss";

// components
import { ReactComponent as LocationIcon } from "../uploads/pin.svg";
import { ReactComponent as MailIcon } from "../uploads/email.svg";
import { ReactComponent as FacebookIcon } from "../uploads/facebook.svg";
import { ReactComponent as TwitterIcon } from "../uploads/twitter.svg";
import { ReactComponent as InstaIcon } from "../uploads/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../uploads/youtube.svg";
import { ReactComponent as LinkedinIcon } from "../uploads/linkedin.svg";

const Footer = () => {
  const footerWidth = 1920;
  const totalHeight = 600 * (footerWidth / 1920);
  const footerHeight = 400 * (footerWidth / 1920);
  // TODO: use better variable names
  const y = totalHeight - footerHeight;
  const a = [0, y];
  const b = [footerWidth, y];
  const c = [footerWidth, y + footerHeight];
  const d = [0, y + footerHeight];

  const c1 = [0.75 * footerWidth, y + 0.5 * footerHeight];
  const c2 = [0.6 * footerWidth, y - 0.85 * footerHeight];

  const c3 = [0.45 * footerWidth, y - footerHeight];
  const c4 = [0.55 * footerWidth, y + 0.5 * footerHeight];

  const path1 = (
    <path
      d={`
        M ${a}
        C ${c1} ${c2} ${b}
        L ${c}
        L ${d}
        L ${a}
      `}
      fill="url(#gradient1)"
    />
  );
  const path2 = (
    <path
      d={`
        M ${a}
        C ${c3} ${c4} ${b}
        L ${c}
        L ${d}
        L ${a}
      `}
      fill="url(#gradient2)"
    />
  );

  const footerVectors = (
    <div className="footer-vectors">
      <svg
        className="footer-svg"
        height={totalHeight}
        width={footerWidth}
        viewBox="0 0 1920 600"
      >
        <defs>
          <linearGradient id="gradient1" x1="65%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDB797" />
            <stop offset="100%" stopColor="#C94B4B" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C94B4B" />
            <stop offset="100%" stopColor="#474157" />
          </linearGradient>
        </defs>
        {path1}
        {path2}
      </svg>
    </div>
  );
  const footerNav = (
    <div>
      <ul className="nav justify-content-center mx-3">
        <li className="nav-item">
          <Link className="nav-link" to="/team">
            CONTACT US
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/course">
            BLOGS
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            CAREERS
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            FAQ
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            PRIVACY POLICY
          </Link>
        </li>
        <span className="nav-link-partition">|</span>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            TERMS & CONDITION
          </Link>
        </li>
      </ul>
    </div>
  );
  const footerItems = (
    <div className="footer-items">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="address">
              <LocationIcon className="address-icon" />
              <span className="address-text">
                Building - XYZ, Cyber City, Gurugram, Haryana, India
              </span>
            </div>
            <div className="mail">
              <MailIcon className="mail-icon" />
              <span className="mail-text">support @ thebinaryschool.com</span>
            </div>
            <div className="media-handlers">
              <TwitterIcon className="twitter-icon" />
              <FacebookIcon className="facebook-icon" />
              <LinkedinIcon className="linkedin-icon" />
              <InstaIcon className="insta-icon" />
              <YoutubeIcon className="youtube-icon" />
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      {footerNav}
      <div className="copyright text-center">
        Copyright 2021 The Binary School LLC. All rights reserved.
      </div>
    </div>
  );

  return (
    <div className="footer">
      {footerItems}
      {footerVectors}
    </div>
  );
};

export default withRouter(Footer);
