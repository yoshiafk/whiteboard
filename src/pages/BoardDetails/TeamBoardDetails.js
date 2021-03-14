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

export const MODAL_INVITE = 1;
export const MODAL_NEWTASK = 2;

const TeamBoardDetails = (props) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.users.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(token));
  }, [dispatch, token]);

  console.log("cape deh list");
  console.log(props.list);

  const [isOpen, setIsOpen] = useState(false);
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

  const submitInvite = () => {
    // dispatch(deleteAccount(token));
    console.log(props.allList);
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    props.getListAction();
  }, []);

  console.log("List =>", props.list);

  let userFromTeam = props.teamList[0].userId;
  console.log("user From Team", userFromTeam);
  const data = userFromTeam.map((d) => ({
    email: d.email,
    key: d.email,
    name: d.name,
    href: "#",
  }));

  const onDragEnd = ({ source, destination, type }) => {
    if (!destination) return;
    console.log("source", source);
    console.log("destionation", destination);
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
                    Boards / {props.selectedTeam} / {props.selectedBoard.board}
                  </Address>
                </TopLeft>
                <TopRight>
                  <User>
                    <AvatarGroup
                      maxCount="5"
                      appearance="stack"
                      size="medium"
                      data={data}
                    />
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
                    <span>Invites</span>
                  </Invite>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setWhichModal(MODAL_NEWTASK);
                    }}
                  >
                    new task
                  </button>
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
                Board Task | SSS by Team A
              </div>
              <input
                className="newtask-form-input"
                type="text"
                name="task-title"
                placeholder="TES"
                onChange={(event) => handleInvite(event)}
              />

              <div>
                <select
                  className="dropdown-form-input"
                  name="todo"
                  id="todo"
                  // onChange={(event) => handleChangeData(event)}
                  // value={user.industry}
                  // defaultValue={user.industry}
                >
                  {/* <option disabled hidden value=""></option> */}
                  <option value="0">TODO:</option>
                  <option value="TASK 1">TASK 1 </option>
                  <option value="TASK 2">TASK 2</option>
                  <option value="TASK 3">TASK 3</option>
                </select>
              </div>

              <form className="detail-form">
                <input
                  contentLabel="coba"
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  placeholder="none"
                  onChange={(event) => handleInvite(event)}
                />
                <input
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  placeholder="none"
                  onChange={(event) => handleInvite(event)}
                />
                <input
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  placeholder="none"
                  onChange={(event) => handleInvite(event)}
                />
                <input
                  className="detail-form-input"
                  type="text"
                  name="task-title"
                  placeholder="none"
                  onChange={(event) => handleInvite(event)}
                />
              </form>
              <form className="detail-label">
                <div className="detail-labels">Assign to</div>
                <div className="detail-labels">Priority</div>
                <div className="detail-labels">Due Date</div>
                <div className="detail-labels">Labels</div>
              </form>

              <div className="newtask-editor-desc">Description</div>
              <div className="newtask-editor">
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pretium augue, quis ornare nisl. Lorem ipsum dolor sit amet, consectetur adipiscing. Quisque eget pretium augue, quis ornare nisl.</p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
              <button
                className="Newtask-form-submit"
                type="button"
                // onClick={submitInvite}
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
    selectedTeam: state.SelectedTeam.selectedTeam.team,
    selectedBoard: state.SelectedBoard.selectedBoard,
  };
};

const mdtp = (dispatch) => {
  return {
    getListAction: () => dispatch(getAllList()),
  };
};

export default connect(mstp, mdtp)(TeamBoardDetails);
