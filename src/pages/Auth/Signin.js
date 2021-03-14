import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  googleLoginTry,
  facebookTry,
  postLogIn,
} from "../../redux/Auth/actions";
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../../constant/RefreshToken";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import axios from "axios";

import "./Signin.scss";
import googleLogo from "../../assets/GoogleLogo.png";
import facebookLogo from "../../assets/FacebookLogo.png";
import LogoBW from "../../assets/LogoBW.png";

export default function Signin(props) {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    token: "",
  });

  const dispatch = useDispatch();

  const { logIn, jwtToken } = useSelector((state) => state.auths);
  console.log("response logIn", logIn);
  console.log(userLogin);

  const token = localStorage.getItem("token");
  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  const handleLogIn = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const submitLogIn = (event) => {
    event.preventDefault();
    const body = {
      email: userLogin.email,
      password: userLogin.password,
    };

    dispatch(postLogIn(body));
  };

  const clientId = `${process.env.REACT_APP_GOOGLE_API_URL}`;

  // const onSuccess = (res) => {
  //   console.log("Login Success: currentUser:", res.profileObj);
  //   alert(`Logged in successfully, welcome ${res.profileObj.name}`);
  //   console.log(res);
  //   refreshTokenSetup(res);
  // };

  // const onFailure = (res) => {
  //   console.log("Login failed: res:", res);
  //   // alert(`Failed to login 😢`);
  // };

  // const { signIn } = useGoogleLogin({
  //   clientId,
  //   onSuccess,
  //   onFailure,
  //   isSignedIn: true,
  //   accessType: "offline",

  //   // responseType: 'code',
  //   // prompt: 'consent',
  // });

  const responseGoogle = async (response) => {
    if (response) {
      console.log(response, "ini responsenya");
      const data = {
        // name: response.profileObj.name,
        // access_token: response.accessToken,
        // email: response.profileObj.email,
        // googleId: response.profileObj.googleId,
        // tokenId: response.tokenId,
        // accessToken: response.accessToken,
        username: `${process.env.REACT_APP_GOOGLE_APP_KEY}`, // This is the client_id
        password: `${process.env.REACT_APP_GOOGLE_APP_SECRET}`,
      };
      await dispatch(googleLoginTry(data));
    }
  };

  const responseFacebook = async (response) => {
    if (response) {
      console.log(response, "ini responsenya");
      const data = {
        // name: response.profileObj.name,
        // access_token: response.accessToken,
        // email: response.profileObj.email,
        // googleId: response.profileObj.googleId,
        // tokenId: response.tokenId,
        // accessToken: response.accessToken,
        username: `${process.env.REACT_APP_FACEBOOK_APP_KEY}`, // This is the client_id
        password: `${process.env.REACT_APP_FACEBOOK_APP_SECRET}`,
      };
      await dispatch(facebookTry(data));
    }
  };

  const signInGoogle = () => {
    axios
      .request({
        url: "/auth/google",
        method: "get",
        baseURL: `${process.env.REACT_APP_BASE_URL_AUTH}`,
        auth: {
          username: `${process.env.REACT_APP_GOOGLE_APP_KEY}`, // This is the client_id
          password: `${process.env.REACT_APP_GOOGLE_APP_SECRET}`, // This is the client_secret
        },
        data: {
          grant_type: "client_credentials",
          scope: "public",
        },
      })
      .then((respose) => {
        console.log("response logInGoogle", respose);
      });
  };

  const signInFacebook = () => {
    axios
      .request({
        url: "/auth/facebook",
        method: "get",
        baseURL: `${process.env.REACT_APP_BASE_URL_AUTH}`,
        auth: {
          username: `${process.env.REACT_APP_FACEBOOK_APP_KEY}`, // This is the client_id
          password: `${process.env.REACT_APP_FACEBOOK_APP_SECRET}`, // This is the client_secret
        },
        data: {
          grant_type: "client_credentials",
          scope: "public",
        },
      })
      .then((respose) => {
        console.log("response logInFacebook", respose);
      });
  };

  // const submitCek = (e) => {
  //   e.preventDefault();
  //   console.log(googlecred);
  // };

  return (
    <Fragment>
      <div className="SignInNavbar">
        <div className="SignInNavbar-container">
          <a href="/">
            <img className="LogoBW" src={LogoBW} alt="logo"></img>
          </a>
          <button className="Signup-Navbar">
            <a href="/signup" className="Signup-text">
              Sign up ›
            </a>
          </button>
        </div>
      </div>
      <div className="Signin-container">
        <form onSubmit={submitLogIn} className="Signin-form">
          <p className="Signin-sign">Sign in</p>
          <div className="googleAndFacebook">
            {/* <GoogleLogin
              clientId={clientId}
              buttonText="login with google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="google-login"
            /> */}

            <button
              type="button"
              className="Signin-google"
              onClick={signInGoogle}
            >
              <img
                src={googleLogo}
                alt="google logo"
                className="google-logo"
              ></img>
              <p> Sign in with Google </p>
            </button>

            {/* <button onClick={submitCek}> cek </button> */}

            <button
              type="button"
              className="Signin-facebook"
              onClick={responseFacebook}
            >
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="facebook-logo"
              ></img>
              <p>Sign in with Facebook </p>
            </button>
          </div>
          <p className="orUseYourEmail">or use your email to sign in:</p>
          <div className="input-container">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event) => handleLogIn(event)}
            />

            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => handleLogIn(event)}
            />
          </div>
          <button
            disabled={
              userLogin.email == "" || userLogin.password == "" ? true : false
            }
            className="signin-form-submit"
            type="submit"
          >
            Sign in
          </button>
          <a className="forgot-password" href="/forgotpassword">
            Forgot Password
          </a>
        </form>
      </div>
    </Fragment>
  );
}
