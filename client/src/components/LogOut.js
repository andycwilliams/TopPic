import React from "react";
import { GoogleLogout } from "react-google-login";
// client id
const clientId =
  "466243221982-l2hjhe4g7dcuq3h5ute68de36osa92su.apps.googleusercontent.com";
// handles user logout function
function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
