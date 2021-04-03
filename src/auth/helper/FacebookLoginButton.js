import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// components
import { ReactComponent as FacebookIcon } from "../../uploads/facebook.svg";

// helper
import { authenticate, facebookLoginAPICall } from "./api.js";

const FacebookLoginButton = () => {
  const facebookLogin = (res) => {
    // check if res contains error
    facebookLoginAPICall(res.accessToken, res.id)
      .then((response) => {
        // authenticate
        const user = {
          token: response.jwt_token,
          profile: {
            id: res.id,
            name: res.name,
            email: res.email,
            image_url: res.picture.data.url,
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
  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        render={(renderProps) => {
          return (
            <button className="btn" onClick={renderProps.onClick}>
              <FacebookIcon className="facebook-icon" />
              Sign In using Facebook
            </button>
          );
        }}
        autoLoad={false}
        fields="name,email,picture"
        callback={facebookLogin}
      />
    </div>
  );
};

export default FacebookLoginButton;
