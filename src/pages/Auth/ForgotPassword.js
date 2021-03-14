import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postForgotPassword } from "../../redux/Auth/actions";
import LogoBW from "../../assets/LogoBW.png";
import "./ForgotPassword.scss";

export default function ForgotPassword(props) {
  const [userForgotPassword, setForgotPassword] = useState({
    email: "",
  });

  const dispatch = useDispatch();

  const { forgotPassword, jwtToken } = useSelector((state) => state.auths);
  console.log("response forgotPassword", forgotPassword);
  console.log(userForgotPassword);

  const handleForgotPassword = (event) => {
    setForgotPassword({
      ...userForgotPassword,
      [event.target.name]: event.target.value,
    });
  };

  const submitForgotPassword = (event) => {
    event.preventDefault();
    const body = {
      email: userForgotPassword.email,
    };

    dispatch(postForgotPassword(body));
  };

  return (
    <>
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
      <div className="FPS-container">
        <form className="FPS-form">
          <p className="FPS-sign">Recover your account</p>
          <p className="FPS-text1"> Don't worry, happens to the best of us.</p>
          <p className="FPS-text2">
            Please enter your Email Address. You will receive a link to create a
            new password.
          </p>
          <div className="FPS-input-container">
            <input
              className="FPS-form-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(event) => handleForgotPassword(event)}
            />
          </div>
          <button
            className="FPS-form-submit"
            type="submit"
            onClick={submitForgotPassword}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
