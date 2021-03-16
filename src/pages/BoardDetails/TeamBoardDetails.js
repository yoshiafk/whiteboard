import React, { useEffect, useCallback, useState } from "react";
import { RANDOM_USERS } from "./data";
import { useSelector, connect, useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AvatarGroup from "@atlaskit/avatar-group";
import { BsPlusSquareFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import ListDetail from "../../components/BoardDetails/List";
// import { ListDetail } from "../../components/BoardsDetails/List";
import { getAllList } from "../../redux/ListDetail/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { MOVE_LIST } from "../../redux/ListDetail/types";
import Modal from "react-modal";
import "./InviteModal.scss";
import download from "../../assets/download.png";
import share from "../../assets/share.png";
import x from "../../assets/x.png";
import { getUserData } from "../../redux/User/Actions";
import {
  DetailContainer,
  DetailWrapper,
  DetailTop,
  TopLeft,
  Title,
  TopRight,
  Address,
  User,
  Invite,
  Border,
  BoardList,
  DetailBottom,
  NewListContainer,
  NewListButton,
} from "./TeamBoardDetailElement";
import EmptyBoardDetail from "./EmptyBoardDetail";
import NewListModal from "../../components/BoardDetails/Modal/NewListModal";
import { addCard } from "../../redux/CardTask/actions";

export const MODAL_INVITE = 1;
export const MODAL_NEWTASK = 2;

const TeamBoardDetails = (props) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.users.userData);

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

    props.addCard(body, props.selectedBoard, props.selectedTeam, listId);

    setPriority(1);
    setTitle("");
    setDueDate(d);
    setDesc("");
    setIsOpen(false);
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    props.getListAction();
  }, [props.allList]);

  let userFromTeam = props.teamList[0].userId;
  // console.log("user From Team", userFromTeam);
  const data = userFromTeam.map((d) => ({
    email: d.email,
    key: d.email,
    name: d.name,
    href: "#",
  }));

  const onDragEnd = ({ source, destination, type }) => {
    if (!destination) return;
    // console.log("source", source);
    // console.log("destionation", destination);
    // Move list
    if (type === "list") {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {
        dispatch({
          type: MOVE_LIST,
          payload: {
            oldListIndex: source.index,
            newListIndex: destination.index,
          },
        });
      }
      return;
    }

    // Move card
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      // dispatch({
      //   type: MOVE_CARD,
      //   payload: {
      //     sourceListId: source.droppableId,
      //     destListId: destination.droppableId,
      //     oldCardIndex: source.index,
      //     newCardIndex: destination.index,
      //   },
      // });
    }
  };

  return (
    <>
      {props.list.length === 0 ? (
        <EmptyBoardDetail />
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <DetailContainer>
            <DetailWrapper>
              <DetailTop>
                <TopLeft>
                  <Title>
                    <span>{props.selectedBoard.board}</span>
                    <HiOutlineUserGroup />
                  </Title>
                  <Address>
                    Boards / {props.selectedTeam.team} /{" "}
                    {props.selectedBoard.board}
                  </Address>
                </TopLeft>
                <TopRight>
                  <User>
                    <AvatarGroup
                      maxCount="5"
                      appearance="stack"
                      size="medium"
                      data={data}
                    ></AvatarGroup>
                  </User>
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
                  <Invite
                    onClick={() => {
                      setIsOpen(true);
                      setWhichModal(MODAL_INVITE);
                    }}
                  >
                    <span>Invite</span>
                  </Invite>
                  {/* <button
                    onClick={() => {
                      setIsOpen(true);
                      setWhichModal(MODAL_NEWTASK);
                    }}
                  >
                    new task
                  </button> */}
                </TopRight>
              </DetailTop>
              <Border />

              <DetailBottom>
                <Droppable
                  droppableId="board"
                  direction="horizontal"
                  type="list"
                >
                  {(provided) => (
                    <BoardList
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {props.list.map((list, index) => (
                        <ListDetail
                          id={list._id}
                          // key={list._id}
                          index={index}
                          judul={list.title}
                          total={list.cardId.length}
                          cards={list.cardId}
                        />
                      ))}
                      {provided.placeholder}

                      <NewListContainer>
                        <NewListModal />
                      </NewListContainer>
                    </BoardList>
                  )}
                </Droppable>
              </DetailBottom>
            </DetailWrapper>
          </DetailContainer>
        </DragDropContext>
      )}
    </>
  );

  function renderWhichModal() {
    switch (whichModal) {
      case MODAL_INVITE:
        return (
          <div className="Invite-container">
            <div className="Invite-to-board">Invite to board</div>
            <form className="Invite-form">
              <input
                className="invite-form-input"
                type="email"
                name="email"
                placeholder="Email address or name"
                onChange={(event) => handleInvite(event)}
              />
              <p className="invite-with-link-A">Invite with link</p>
              <p className="invite-with-link-B">
                Anyone with link can join as board member
              </p>
              <a className="invite-with-link-C" href="/">
                {" "}
                Create link
              </a>

              <button
                className="Invite-form-submit"
                type="button"
                onClick={submitInvite}
              >
                Send invitation
              </button>
            </form>
          </div>
        );
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
                Board Task | {props.selectedBoard.board} by{" "}
                {props.selectedTeam.team}
              </div>
              <input
                className="newtask-form-input"
                type="text"
                name="task-title"
                id="form_task_title"
                placeholder="TES"
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
                  {props.list.map((el) => {
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
                  onReady={(editor) => {}}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDesc(data);
                  }}
                  onBlur={(event, editor) => {}}
                  onFocus={(event, editor) => {}}
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
              >
                cancel
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

const mstp = (state) => {
  return {
    teamList: state.teamListReducer.teamList,
    allList: state.allList,
    list: state.allList.list.filter((x) => {
      return x.boardId.length > 0
        ? x.boardId[0]._id == state.SelectedBoard.selectedBoard.id
        : false;
    }),
    selectedTeam: state.SelectedTeam.selectedTeam,
    selectedBoard: state.SelectedBoard.selectedBoard,
  };
};

const mdtp = (dispatch) => {
  return {
    getListAction: () => dispatch(getAllList()),
    addCard: (body, board, team, list) =>
      dispatch(addCard(body, board, team, list)),
  };
};

export default connect(mstp, mdtp)(TeamBoardDetails);
