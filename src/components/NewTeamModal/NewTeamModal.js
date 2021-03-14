import React, { useState } from "react";
import Modal from "react-modal";
import { BiPlus } from "react-icons/bi";
import "./NewTeamModal.scss";
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleNewTeamModal } from "../../redux/NewTeamModal/newTeamModalAction";
import { addTeam } from "../../redux/TeamList/teamListActions";

const NewTeamModal = (props) => {
  // const handleAddNewTeam = (event) => {
  //   event.preventDefault();
  //   props.addTeam(document.getElementById("newteam").value);
  //   props.toggleNewTeamModal();
  //   // alert(document.getElementById("form-newteam").newteam.value);

  //   // console.log(props.projects);
  // };

  const dispatch = useDispatch();

  const { teamList } = useSelector((state) => state.teamListReducer);

  const handleAddNewTeam = (event) => {
    event.preventDefault();
    const body = {
      teamName: document.getElementById("newteam").value,
    };

    dispatch(addTeam(body, localStorage.getItem("token")));

    props.toggleNewTeamModal();
  };

  // console.log(props.projects);
  return (
    <div style={{ marginTop: "-20px", cursor: "pointer" }}>
      <BiPlus onClick={props.toggleNewTeamModal} />
      <Modal
        isOpen={props.newTeamModalIsOpen}
        // onRequestClose={props.toggleModal}
        style={{
          content: {
            marginTop: "5%",
            height: "60vh",
            marginRight: "20%",
            marginLeft: "20%",
            // marginBottom: "5%",
            position: "fixed",
            // zIndex: 9999,
          },
          overlay: { zIndex: 3 },
        }}
      >
        <div className="newteammodal-contentbox">
          <div className="newteammodal-title">
            <div className="newteammodal-title-main">Create team</div>
            <div>
              <button
                className="button-close-modal"
                onClick={props.toggleNewTeamModal}
              >
                X
              </button>
            </div>
          </div>

          <form id="form-newteam">
            <input
              className="newteammodal-input"
              placeholder="Team Name"
              id="newteam"
            />
            <div className="newteammodal-button">
              <button
                className="newteammodal-button-cancel"
                onClick={props.toggleNewTeamModal}
              >
                Cancel
              </button>
              <button
                className="newteammodal-button-save"
                onClick={handleAddNewTeam}
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
    newTeamModalIsOpen: state.newTeamModal.newTeamModalIsOpen,
    // projects: state.TeamList.projects,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleNewTeamModal: () => dispatch(toggleNewTeamModal()),
    addTeam: (teamName, token) => dispatch(addTeam(teamName, token)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(NewTeamModal);
