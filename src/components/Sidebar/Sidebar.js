import React, { useState, useEffect } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import "./Sidebar.scss";
import { connect } from "react-redux";
import { toggleSideBar } from "../../redux/Sidebar/sidebarAction";

const SideBar = (props) => {
  let sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  let buttonClass = props.isOpen ? "sidebar-toggle" : "sidebar-toggle closed";
  return (
    <div className={sidebarClass}>
      <div className="sidebar-children">{props.children}</div>

      <button onClick={props.toggleSideBar} className={buttonClass}>
        {props.isOpen ? <AiFillLeftCircle /> : <AiFillRightCircle />}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.SideBar.isOpen,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleSideBar: () => dispatch(toggleSideBar()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(SideBar);
