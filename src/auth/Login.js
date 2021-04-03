// react libraries
import React from "react";
import { Redirect } from "react-router-dom";

// stylesheets
import "./stylesheets/login.scss";

// components
import GoogleLoginButton from "./helper/GoogleLoginButton";
import FacebookLoginButton from "./helper/FacebookLoginButton";

const Login = () => {
  // TODO: use modular values instead of constants
  const y = 30;
  const footerWidth = 350;
  const footerHeight = 250;
  const a = [0, y];
  const b = [footerWidth, y - 20];
  const c = [footerWidth, y + footerHeight];
  const d = [0, y + footerHeight];

  const c1 = [0.3 * footerWidth, y - 0.3 * footerHeight];
  const c2 = [0.65 * footerWidth, y + 0.15 * footerHeight];

  const loginHead = (
    <div className="login-head">
      <div className="login-heading">Sign In</div>
      <div className="login-subheading">
        Sign in to your account to access the exclusive content
      </div>
    </div>
  );
  const path = (
    <path
      d={`
        M ${a}
        C ${c1} ${c2} ${b}
        L ${c}
        L ${d}
        L ${a}
      `}
      fill="url(#gradient)"
    />
  );
  const loginVector = (
    <div className="login-vectors">
      <svg height="270px" width="100%">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA6EAB" />
            <stop offset="100%" stopColor="#FFB8B8" />
          </linearGradient>
        </defs>
        {path}
      </svg>
    </div>
  );
  // check if the google button glitch (color fade) still exists
  const loginBody = (
    <div className="login-body">
      <div className="google-login">
        <GoogleLoginButton />
      </div>
      <div className="facebook-login">
        <FacebookLoginButton />
      </div>
    </div>
  );
  return (
    <div className="modal fade login-modal">
      <div className="modal-dialog modal-dialog-centered justify-content-center">
        <div className="modal-content login-modal-box">
          <div className="modal-header">
            <button className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {loginHead}
            {loginBody}
            {loginVector}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
