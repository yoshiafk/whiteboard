import React, { useEffect } from "react";
import AssignedtoUser from "./HomeContent/AssignedtoUser";
import RecentBoards from "./HomeContent/RecentBoards";
import "./Home.scss";
import { getBoard } from "../../redux/BoardList/boardListActions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/User/Actions";

const Home = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  // const teamList = useSelector((state) => state.teamListReducer.teamList);

  // useEffect(() => {
  //   console.log(true);
  //   dispatch(getBoard(teamList, localStorage.getItem("token")), 1);
  // }, []);

  return (
    <div>
      <h1 className="main-title">Home</h1>
      <div>
        <RecentBoards />
      </div>
      <div>
        <AssignedtoUser todos={props.todos} />
      </div>
    </div>
  );
};

export default Home;
