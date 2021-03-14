import React from "react";
import LogoBW from "../../assets/LogoBW.png";
import "./ResetPasswordSuccess.scss";

export default function ResetPasswordSuccess() {
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
      <div className="RPS-container">
        <form className="RPS-form">
          <p className="RPS-sign">Email has been sent!</p>
          <p className="RPS-text1">
            Please check your inbox (or spam) and click the reset button to be
            redirected to the reset password page
          </p>
          <button className="RPS-form-submit" href="/signin">
            Login
          </button>
          <a className="RPS-troubleEmail">
            Didn't receive the email? &nbsp;
            <span className="RPS-resend" href="/reset-password">
              Resend
            </span>
          </a>
        </form>
      </div>
    </>
  );
}
