import React from "react";
import GoogleLogin from "react-google-login";

// components
import { ReactComponent as GoogleIcon } from "../../uploads/google.svg";

// helper
import { authenticate, googleLoginAPICall } from "./api.js";

const GoogleLoginButton = () => {
  const googleLoginSuccess = (res) => {
    // check if res contains error
    googleLoginAPICall(res.accessToken, res.profileObj.googleId)
      .then((response) => {
        // authenticate
        const user = {
          token: response.jwt_token,
          profile: {
            id: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            image_url: res.profileObj.imageUrl,
          },
        };
        authenticate(user, () => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleLoginFailure = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => {
          return (
            <button
              className="btn"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <GoogleIcon className="google-icon" />
              Sign In using Google
            </button>
          );
        }}
        onSuccess={googleLoginSuccess}
        onFailure={googleLoginFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleLoginButton;
