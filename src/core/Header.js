// react libraries
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

// css
import "./stylesheets/header.scss";

// assets
import companyLogo from "../uploads/{b}.svg";

// components
import Login from "../auth/Login.js";

// helper
import { isAuthenticated, signout } from "../auth/helper/api.js";

// function
const Header = () => {
  const user = isAuthenticated();

  return (
    <div>
      <nav className="navbar navbar-expand-lg container-fluid header fixed-top">
        <div className="navbar-brand">
          <img src={companyLogo} alt="logo" className="logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">
                COURSE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                TEAM
              </Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link
                  className="nav-link login-button"
                  to="#"
                  data-toggle="modal"
                  data-target=".login-modal"
                >
                  <span className="login-button-text">LOGIN</span>
                </Link>
              </li>
            )}
            {user && (
              <li className="nav-item user-profile">
                <Link
                  className="logout-button"
                  to="#"
                  onClick={() => {
                    signout(() => {
                      // handle post-logout events
                      window.location.reload();
                    });
                  }}
                >
                  <img
                    className="user-profile-image"
                    src={user.profile.image_url}
                    alt={user.profile.name}
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {!user && <Login />}
    </div>
  );
};

export default withRouter(Header);
