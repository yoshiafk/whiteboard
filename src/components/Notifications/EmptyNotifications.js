import React from "react";

import "./Notifications.scss";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { toggleNotificationModal } from "../../redux/Notification/notificationModalAction";
import EmptyNotif from "../../assets/EmptyNotif.jpg";

const EmptyNotifications = (props) => {
  console.log(props.notificationModalIsOpen);

  const notificationModalIsOpen = props.notificationModalIsOpen
    ? "section"
    : "section invisible";

  return (
    <div className={notificationModalIsOpen}>
      <div className="notif-card z-depth-0">
        <div className="notif-card-content">
          <div className="notif-head">
            <div className="notif-card-title">Notifications</div>
            <div className="notif-x">
              <AiOutlineClose onClick={props.toggleNotificationModal} />
            </div>
          </div>

          <div className="notif-link">
            <div></div>
            <div>
              <a href="#">Mark All as Read</a>
            </div>
          </div>
          <div className="notif-pictureinfo">
            <center>
              <img src={EmptyNotif} alt="empty" />
              <div className="notif-pictureinfo-text">No Notifications</div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notificationModalIsOpen: state.notificationModal.notificationModalIsOpen,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleNotificationModal: () => dispatch(toggleNotificationModal()),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(EmptyNotifications);
