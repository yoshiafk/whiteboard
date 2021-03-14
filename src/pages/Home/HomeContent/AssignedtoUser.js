import React from "react";
import "./AssignedtoUser.scss";
import TasksTodoperList from "../../Tasks/TasksTodoperList";
import { connect } from "react-redux";

const AssignedtoUser = (props) => {
  let todos = props.todos;

  return (
    <div className="assignedtouser-container">
      <div className="assignedtouser-title">Assigned to me</div>
      <center>
        <hr />
      </center>
      <div className="assignedtouser-todo"> TO DO</div>
      <div>
        {todos.slice(0, 5).map((todo) => (
          <TasksTodoperList key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.Todos.todos,
  };
};
export default connect(mapStateToProps)(AssignedtoUser);
