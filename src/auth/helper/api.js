export const googleLoginAPICall = (accessToken, userId) => {
  return fetch("http://localhost:5000/api/v1/auth/signin/google", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token: accessToken,
      user_id: userId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export const facebookLoginAPICall = (accessToken, userId) => {
  return fetch("http://localhost:5000/api/v1/auth/signin/facebook", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token: accessToken,
      user_id: userId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export const authenticate = (user, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("tbs_auth_credentials", JSON.stringify(user));
    next();
  }
};
export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("tbs_auth_credentials")) {
    return JSON.parse(localStorage.getItem("tbs_auth_credentials"));
  } else {
    return false;
  }
};
export const signout = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("tbs_auth_credentials");
    next();
  }
};
