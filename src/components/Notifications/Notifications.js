import React from "react";
import NotificationsCards from "../Cards/NotificationsCards/NotificationsCards";
import "./Notifications.scss";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { toggleNotificationModal } from "../../redux/Notification/notificationModalAction";
import EmptyNotifications from "./EmptyNotifications";

const Notifications = (props) => {
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
            <div>
              <a href="/tasks">View All</a>
            </div>
            <div>
              <a href="#">Mark All as Read</a>
            </div>
          </div>
          <div>
            <NotificationsCards />
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

export default connect(mapStateToProps, mapDispatchtoProps)(Notifications);
