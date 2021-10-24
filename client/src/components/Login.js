import React from "react";
import { GoogleLogin } from "react-google-login";
// Token
import { refreshTokenSetup } from "../utils/refreshToken";
// Imports
// Client ID for Google Login.
const clientId =
  "466243221982-l2hjhe4g7dcuq3h5ute68de36osa92su.apps.googleusercontent.com";

// Function handles user Login page change.
function Login({ handlePageChange }) {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    // Token
    refreshTokenSetup(res);
    handlePageChange("Explore");
  };
// Handles if Google Login fails and changes page.
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
    handlePageChange("Main");
  };
  console.log("login ", handlePageChange);

  return (
    <div className="flex flex-col justify-center items-center">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_orgin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
// Exports Google Login feature.