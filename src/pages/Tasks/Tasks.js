import React, { useEffect, useRef, useState } from "react";
import "./Tasks.scss";
import TasksTodoperList from "./TasksTodoperList";
import { connect } from "react-redux";

const Tasks = (props) => {
  const todos = props.todos.todos;
  let arrayForHoldingPosts = [];
  const [postsToShow, setPostsToShow] = useState([]);
  const postsPerPage = todos.length > 10 ? 10 : todos.length;
  // console.log(todos.length);

  const ref = useRef(postsPerPage);

  const loopWithSlice = (start, end) => {
    const slicedPosts = todos.slice(start, end);
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts);
    setPostsToShow(postsToShow.concat(arrayForHoldingPosts));
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  // console.log(postsToShow.length);

  const handleShowMorePosts = () => {
    loopWithSlice(ref.current, ref.current + postsPerPage);
    ref.current += postsPerPage;
  };

  return (
    <div className="tasks-container">
      <div className="tasks-title"> Tasks </div>
      <div className="tasks-assignedtouser-title">Assigned to me</div>
      <center>
        <hr />
      </center>
      <div className="tasks-assignedtouser-todo"> TO DO</div>
      <div>
        {postsToShow.map((todo) => (
          <TasksTodoperList key={todo._id} {...todo} />
        ))}
      </div>
      {postsToShow.length < todos.length ? (
        <button id="tasks-loadmore" onClick={handleShowMorePosts}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.Todos,
  };
};

export default connect(mapStateToProps)(Tasks);
