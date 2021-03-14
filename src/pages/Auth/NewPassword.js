import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { patchResetPassword } from "../../redux/Auth/actions";
import LogoBW from "../../assets/LogoBW.png";
import "./NewPassword.scss";

export default function ResetPassword() {
  const [userResetPassword, setResetPassword] = useState({
    password: "",
  });

  const dispatch = useDispatch();

  const { resetPassword, jwtToken } = useSelector((state) => state.auths);
  console.log("response resetPassword", resetPassword);
  console.log(resetPassword);

  const handleResetPassword = (event) => {
    setResetPassword({
      ...userResetPassword,
      [event.target.name]: event.target.value,
    });
  };

  const submitResetPassword = (event) => {
    event.preventDefault();
    const body = {
      password: userResetPassword.password,
    };

    dispatch(patchResetPassword(body));
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
      <div className="FP-container">
        <form className="FP-form">
          <p className="FP-sign">Choose a new Password</p>
          <div className="FP-input-container">
            <input
              className="FP-form-input"
              type="password"
              name="password"
              placeholder="Password 5+ characters"
              onChange={(event) => handleResetPassword(event)}
            />
          </div>
          <button
            className="FP-form-submit"
            type="submit"
            onClick={submitResetPassword}
          >
            Continue
          </button>
          <a className="troubleLogin" href="#">
            still having trouble login in?
          </a>
        </form>
      </div>
    </>
  );
}
