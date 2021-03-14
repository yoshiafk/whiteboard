import React from "react";
import { Link } from "react-router-dom";
import BoardsCards from "../../../components/Cards/BoardsCards/BoardsCards";
import "./RecentBoards.scss";

export default function RecentBoards(props) {
  return (
    <div className="recentboards-container">
      <div className="recentboards">
        <div className="recentboards-title">Your recent whiteboards</div>
        <div className="all-boards">
          <Link to="/boards">View all boards</Link>
        </div>
      </div>
      <div className="cardex-container">
        <BoardsCards />
      </div>
    </div>
  );
}
