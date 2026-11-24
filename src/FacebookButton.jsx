import React from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log(response);
};

const FacebookButton = () => (
  <FacebookLogin
    appId="676767676767"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
  />
);

export default FacebookButton;
