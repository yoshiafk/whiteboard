import React from "react";
import Modal from "react-modal";
import { BsPlusSquareFill } from "react-icons/bs";
import "./NewListModal.scss";
import { connect, useDispatch } from "react-redux";
import { toggleNewList } from "../../../redux/NewListModal/actions";
import { addList } from "../../../redux/ListDetail/actions";

const NewListModal = (props) => {
  const dispatch = useDispatch();

  const handleAddNewList = (e) => {
    e.preventDefault();
    const body = {
      title: document.getElementById("newList").value,
    };

    dispatch(addList(body, props.selectedBoard));

    props.toggleNewList();
  };

  // console.log(props.projects);
  return (
    <div style={{ marginTop: "-20px", cursor: "pointer" }}>
      <span className="new_list-container">
        <button className="new_list-wrapper" onClick={props.toggleNewList}>
          <BsPlusSquareFill
            style={{ color: "blue", width: "20px", height: "20px" }}
          />
          <p>Add new list</p>
        </button>
      </span>
      <Modal
        isOpen={props.newListIsOpen}
        // onRequestClose={props.toggleModal}
        style={{
          content: {
            marginTop: "10%",
            height: "45vh",
            width: "55vw",
            marginRight: "20%",
            marginLeft: "20%",
            // marginBottom: "5%",
            position: "fixed",
            // zIndex: 9999,
          },
          overlay: { zIndex: 5 },
        }}
      >
        <div className="new_list-contentbox">
          <div className="new_list-title">
            <div className="new_list-title-main">Add list</div>
            <div>
              <button
                className="button-close-modal"
                onClick={props.toggleNewList}
              >
                X
              </button>
            </div>
          </div>

          <form id="form-newteam">
            <input
              className="new_list-input"
              placeholder="List Title"
              id="newList"
            />
            <div className="new_list-button">
              <button
                className="new_list-button-cancel"
                onClick={props.toggleNewList}
              >
                Cancel
              </button>
              <button
                className="new_list-button-save"
                onClick={handleAddNewList}
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

const mstp = (state) => {
  return {
    newListIsOpen: state.newListModal.newListIsOpen,
    // projects: state.TeamList.projects,
    selectedBoard: state.SelectedBoard.selectedBoard,
  };
};

const mdtp = (dispatch) => {
  return {
    toggleNewList: () => dispatch(toggleNewList()),
    addList: (title) => dispatch(addList(title)),
  };
};

export default connect(mstp, mdtp)(NewListModal);
