import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskCard from "../Cards";
import { connect, useSelector, useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getAllList } from "../../../redux/ListDetail/actions";
import { addCard } from "../../../redux/CardTask/actions";
// import { getCardTask } from "../../../redux/CardTask/actions";
import { getUserData } from "../../../redux/User/Actions";
import {
  ListContainer,
  TopWrapper,
  Container,
  Title,
  Count,
  Border,
  BottomContainer,
  AddNewCard,
} from "./ListElement";

import Modal from "react-modal";
import "../../../pages/BoardDetails/InviteModal.scss";

import download from "../../../assets/download.png";
import share from "../../../assets/share.png";
import x from "../../../assets/x.png";

export const MODAL_NEWTASK = 1;

const ListDetail = ({
  props,
  cardTask,
  judul,
  key,
  total,
  id,
  index,
  cards,
  listID,
}) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.users.userData);
  const selectedBoard = useSelector(
    (state) => state.SelectedBoard.selectedBoard
  );
  const selectedTeam = useSelector((state) => state.SelectedTeam.selectedTeam);
  const list = useSelector((state) =>
    state.allList.list.filter((x) => {
      return x.boardId.length > 0
        ? x.boardId[0]._id == state.SelectedBoard.selectedBoard.id
        : false;
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  const [isOpen, setIsOpen] = useState(false);
  const d = new Date();

  const [f_priority, setPriority] = useState(1);
  const [f_title, setTitle] = useState("");
  const [f_dueDate, setDueDate] = useState(d);
  const [f_description, setDesc] = useState("");

  const [whichModal, setWhichModal] = useState(null);
  const [inviteEmail, setinviteEmail] = useState({
    email: "",
  });

  const handleInvite = (event) => {
    setinviteEmail({
      ...inviteEmail,
      [event.target.name]: event.target.value,
    });
  };

  const submitInvite = (e) => {
    e.preventDefault();
    const body = {
      priority: f_priority,
      title: f_title,
      description: f_description,
      dueDate: f_dueDate,
    };
    const listId = document.getElementById("form_listid").value;

    dispatch(addCard(body, selectedBoard, selectedTeam, listId));

    setPriority(1);
    setTitle("");
    setDueDate(d);
    setDesc("");
    setIsOpen(false);
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <ListContainer
          // key={key}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Container>
            <TopWrapper>
              <Title>{judul}</Title>
              <Count>{total}</Count>
            </TopWrapper>
            <Border />
            <Droppable droppableId={String(id)}>
              {(provided) => (
                <BottomContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map((task, index) => (
                    <TaskCard
                      cardID={task._id}
                      label={task.label}
                      title={task.title}
                      priority={task.priority}
                      index={index}
                      assignedUser={task.userId}
                    />
                  ))}
                  <Modal
                    className="Modal-invite-container"
                    overlayClassName="Invite-overlay-right"
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Account"
                    closeTimeoutMS={50}
                  >
                    {renderWhichModal()}
                  </Modal>
                  {provided.placeholder}
                  <AddNewCard
                    onClick={() => {
                      setIsOpen(true);
                      setWhichModal(MODAL_NEWTASK);
                    }}
                  >
                    + Add new card
                  </AddNewCard>
                </BottomContainer>
              )}
            </Droppable>
          </Container>
        </ListContainer>
        // </div>
      )}
    </Draggable>
  );

  function renderWhichModal() {
    switch (whichModal) {
      case MODAL_NEWTASK:
        return (
          <div className="Newtask-container">
            <div className="right_side_icon">
              <div className="RSI">
                <img src={download} className="RSI" alt="download"></img>
                <img src={share} className="RSI" alt="share"></img>
                <img
                  src={x}
                  onClick={toggleModal}
                  className="RSI"
                  alt="close"
                ></img>
              </div>
            </div>

            <form className="newtask-form">
              <div className="newtask-breadcrumbs">
                Board Task | {selectedBoard.board} by &nbsp;
                {selectedTeam.team}
              </div>
              <input
                className="newtask-form-input"
                type="text"
                name="task-title"
                id="form_task_title"
                placeholder=""
                value={f_title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <div>
                <select
                  className="dropdown-form-input"
                  name="todo"
                  id="form_listid"
                  // onChange={(event) => handleChangeData(event)}
                  // defaultValue={user.industry}
                >
                  {list.map((el) => {
                    return <option value={el._id}>{el.title}</option>;
                  })}
                </select>
              </div>

              <div className="detail-form">
                <input
                  contentLabel="coba"
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  id="form_assign_to"
                  placeholder="none"
                  // onChange={(event) => handleInvite(event)}
                />

                <select
                  className="detail-form-input"
                  name="priority"
                  id="form_priority"
                  value={f_priority}
                  onChange={(event) => {
                    setPriority(event.target.value);
                  }}
                >
                  <option value="1">low</option>
                  <option value="2">medium</option>
                  <option value="3">high</option>
                  <option value="4">dangerous</option>
                </select>
                <input
                  className="detail-form-input"
                  type="date"
                  name="due_date"
                  id="form_due_date"
                  placeholder="none"
                  value={f_dueDate}
                  onChange={(event) => setDueDate(event.target.value)}
                />
                <input
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  id="form_label"
                  placeholder="none"
                  // onChange={(event) => handleInvite(event)}
                />
              </div>
              <div className="detail-label">
                <div className="detail-labels">Assign to</div>
                <div className="detail-labels">Priority</div>
                <div className="detail-labels">Due Date</div>
                <div className="detail-labels">Labels</div>
              </div>

              <div className="newtask-editor-desc">Description</div>
              <div className="newtask-editor">
                <CKEditor
                  id="form_desc"
                  editor={ClassicEditor}
                  data={f_description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDesc(data);
                    // console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    // console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    // console.log("Focus.", editor);
                  }}
                />
              </div>
              <button
                className="Newtask-form-submit"
                type="button"
                onClick={submitInvite}
              >
                Save
              </button>
              <button
                className="Newtask-form-cancel"
                type="button"
                // onClick={submitInvite}
                onClick={toggleModal}
              >
                Cancel
              </button>

              <div className="newtask-editor-comment">Comment</div>
              <img
                src={user.photo}
                className="comment-photo"
                alt="avatar"
              ></img>
              <input
                className="newtask-comment-input"
                type="text"
                name="comment"
                placeholder="Put your comment here"
                onChange={(event) => handleInvite(event)}
              />
            </form>
          </div>
        );
      default:
        break;
    }
  }
};

export default ListDetail;
