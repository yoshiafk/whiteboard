import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useGoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "../../constant/RefreshToken";
// import { GOOGLE_APP_KEY } from "../../constant/Key";
import { postSignUp } from "../../redux/Auth/actions";
import googleLogo from "../../assets/GoogleLogo.png";
import facebookLogo from "../../assets/FacebookLogo.png";
import LogoBW from "../../assets/LogoBW.png";
import "./Signup.scss";
import axios from "axios";
import Loading from "../../components/LoadingBar/loading";

import _ from "lodash";
import jwt_decode from "jwt-decode";

export default function Signup(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const isAuthLoading = useSelector((state) => state.auths.isAuthLoading);
  const { signup, jwtToken } = useSelector((state) => state.auths);
  // console.log("response signup", signup);
  // console.log(userData);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  const handleSignUp = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const submitSignUp = (event) => {
    event.preventDefault();
    const body = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    // dispatch(postSignUp(body));
    dispatch(postSignUp(body));
  };

  // const clientId = `${GOOGLE_APP_KEY}`;

  // const onSuccess = (res) => {
  //   console.log("Login Success: currentUser:", res.profileObj);
  //   // alert(`Logged in successfully, welcome ${res.profileObj.name}`);
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
  // })

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
        baseURL: `${process.env.REACT_APP_BASE_URL_AUTH}`, //https://whiteboard-signup.herokuapp.com/auth/google
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

  const [hasChecked, setHasChecked] = useState(false);

  return (
    <Fragment>
      <div className="SignupNavbar">
        <div className="SignupNavbar-container">
          <a href="/">
            <img className="LogoBW" src={LogoBW} alt="logo"></img>
          </a>
          <button className="Signin-Navbar">
            <a href="/signin" className="Signin-text">
              Sign in ›
            </a>
          </button>
        </div>
      </div>

      <div className="Signup-container">
        {isAuthLoading ? (
          <Loading />
        ) : (
          <form className="Signup-form">
            <p className="Signup-sign"> Get started free today</p>
            <div className="Signup-input-container">
              <input
                className="Signup-form-input"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(event) => handleSignUp(event)}
              />

              <input
                className="Signup-form-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => handleSignUp(event)}
              />

              <input
                className="Signup-form-input"
                type="password"
                name="password"
                placeholder="Password 5+ characters"
                onChange={(event) => handleSignUp(event)}
              />
            </div>

            <div className="termsAndCondition">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                value="terms &amp; conditions "
                onChange={() => setHasChecked((checked) => !checked)}
              ></input>
              <label for="agreement">
                &nbsp;&nbsp;&nbsp; I agree with Whiteboard's terms &amp;
                conditions{" "}
              </label>
            </div>

            <button
              className="signup-submit"
              type="submit"
              onClick={submitSignUp}
              disabled={
                userData.name == "" ||
                userData.email == "" ||
                userData.password == "" ||
                hasChecked == false
                  ? true
                  : false
              }
            >
              Sign up
            </button>

            <p className="orSignUp">or sign up with:</p>

            <div className="googleAndFacebook">
              <button
                type="button"
                className="Signup-google"
                onClick={signInGoogle}
              >
                <img
                  src={googleLogo}
                  alt="google logo"
                  className="google-logo"
                ></img>
                <p> Sign in with Google </p>
              </button>

              <button
                type="button"
                className="Signup-facebook"
                onClick={signInFacebook}
              >
                <img
                  src={facebookLogo}
                  alt="facebook logo"
                  className="facebook-logo"
                ></img>
                <p>Sign in with Facebook </p>
              </button>
            </div>
          </form>
        )}
      </div>
    </Fragment>
  );
}
