import React from "react";
import { connect } from "react-redux";
import NotificationsCard from "./NotificationsCard";
import "./NotificationsCards.scss";

const NotificationsCards = (props) => {
  let todos = props.todos.todos;

  const teamSearchColor = () => {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };
  const teamColor = teamSearchColor();

  return (
    <div className="NotifCards-container">
      {todos.slice(0, 3).map((todo) => (
        <NotificationsCard key={todo.id} {...todo} teamColor={teamColor} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.Todos,
  };
};

export default connect(mapStateToProps)(NotificationsCards);
