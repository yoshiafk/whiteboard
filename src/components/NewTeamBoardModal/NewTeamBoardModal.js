import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusSquareFill } from "react-icons/bs";
import "./NewTeamBoardModal.scss";
import { connect } from "react-redux";
import { togglenewTeamBoardsModal } from "../../redux/NewTeamBoardsModal/newTeamBoardsModalAction";
import { addBoard } from "../../redux/BoardList/boardListActions";
import Loading from "../../components/LoadingBar/loading";

const NewTeamBoardModal = (props) => {
  const filteredProject = props.filteredboardList;
  const isBoardLoading = useSelector(
    (state) => state.boardListReducer.isBoardLoading
  );
  // console.log(filteredProject);

  const handleAddNewTeamBoard = (event) => {
    event.preventDefault();
    const body = {
      teamId: props.selectedTeam.id,
      title: document.getElementById("newboard").value,
    };
    props.addBoard(body, localStorage.getItem("token"));
    props.togglenewTeamBoardsModal();
  };

  return (
    <div>
      {filteredProject.length < 1 ? (
        <button
          className="teamboardsempty-button"
          onClick={props.togglenewTeamBoardsModal}
        >
          Create Board
        </button>
      ) : (
        <span className="TeamBoardsCards-buttonaddcontainer">
          <button
            className="TeamBoardsCards-buttonadd"
            onClick={props.togglenewTeamBoardsModal}
          >
            <BsPlusSquareFill
              style={{ color: "blue", width: "20px", height: "20px" }}
            />
            <p>Create new board</p>
          </button>
        </span>
      )}

      <Modal
        isOpen={props.newTeamBoardsModalIsOpen}
        selectedTeam={props.selectedTeam}
        style={{
          content: {
            marginTop: "5%",
            height: "60vh",
            marginRight: "20%",
            marginLeft: "20%",
            position: "fixed",
          },
          overlay: { zIndex: 3 },
        }}
      >
        <div className="newteammodal-contentbox">
          <div className="newteammodal-title">
            <div className="newteammodal-title-main">
              New Board | {props.selectedTeam.team}
            </div>
            <div>
              <button onClick={props.togglenewTeamBoardsModal}>X</button>
            </div>
          </div>

          <form>
            <input
              className="newteammodal-input"
              placeholder="Board Name"
              id="newboard"
            />
            <div className="newteammodal-button">
              <button
                className="newteammodal-button-cancel"
                onClick={props.togglenewTeamBoardsModal}
              >
                Cancel
              </button>
              <button
                className="newteammodal-button-save"
                onClick={handleAddNewTeamBoard}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTeam: state.SelectedTeam.selectedTeam,
    newTeamBoardsModalIsOpen: state.newTeamBoardsModal.newTeamBoardsModalIsOpen,
    filteredboardList: state.boardListReducer.boardList.filter((x) =>
      x.teamId.includes(state.SelectedTeam.selectedTeam.id)
    ),
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    togglenewTeamBoardsModal: () => dispatch(togglenewTeamBoardsModal()),
    addBoard: (body, token) => {
      dispatch(addBoard(body, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(NewTeamBoardModal);
