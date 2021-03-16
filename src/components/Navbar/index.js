import React, { useState } from "react";
import "./Navbar.scss";
import "font-awesome/css/font-awesome.min.css";
import { MdNotifications, MdHelp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import WhiteboardLogo from "../../assets/LogoColor.png";
import { Link } from "react-router-dom";
import { toggleNotificationModal } from "../../redux/Notification/notificationModalAction";
import Notifications from "../Notifications/Notifications";
import EmptyNotifications from "../Notifications/EmptyNotifications";

import { useSelector, useDispatch, connect } from "react-redux";
import _ from "lodash";
import jwt_decode from "jwt-decode";

const Navbar = (props) => {
  const { logIn, jwtToken } = useSelector((state) => state.auths);
  const user = useSelector((state) => state.users.userData);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <div className="HeaderArea">
      <div className="Header">
        <a href="/home">
          <img
            src={WhiteboardLogo}
            alt="logo"
            style={{ width: "200px", height: "55px" }}
          />
        </a>
      </div>
      <div className="right-side">
        <div className="searchContainer">
          <i className="fa fa-search searchIcon"></i>
          <input type="search" placeholder="Search" className="searchBox" />
        </div>
        <div className="Icon">
          <div className="icon">
            <div>
              <MdNotifications
                onClick={() => {
                  props.toggleNotificationModal();
                }}
              />
            </div>
          </div>
          <div className="icon">
            <a href="#">
              <MdHelp />
            </a>
          </div>
          <div className="icon">
            <img src={user.photo} className="icon" alt="avatar"></img>
            <ul className="nav__submenu">
              <li className="nav__submenu-item ">
                <a href="/account"> Profile </a>
              </li>
              <li className="nav__submenu-item ">
                <a
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.open("/", "_self");
                    localStorage.removeItem("state");
                    // window.reload();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {props.todos.length < 1 ? <EmptyNotifications /> : <Notifications />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notificationModalIsOpen: state.notificationModal.notificationModalIsOpen,
    todos: state.Todos.todos,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleNotificationModal: () => dispatch(toggleNotificationModal()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Navbar);
