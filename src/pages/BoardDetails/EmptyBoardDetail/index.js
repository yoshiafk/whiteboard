import React, { useEffect, useState } from "react";
import { RANDOM_USERS } from "../data";
import { connect, useDispatch } from "react-redux";
import AvatarGroup from "@atlaskit/avatar-group";
// import { BsPlusSquareFill } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { getAllList } from "../../../redux/ListDetail/actions";
import { DragDropContext } from "react-beautiful-dnd";
import { MOVE_LIST } from "../../../redux/ListDetail/types";
import Modal from "react-modal";

// import "./InviteModal.scss";
import "../InviteModal.scss";

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
  DetailBottom,
  NewListContainer,
} from "./EmptyBoardDetailElement";
import NewListModal from "../../../components/BoardDetails/Modal/NewListModal";

export const MODAL_INVITE = 1;

const TeamBoardDetails = (props) => {
  console.log("cape deh list");
  console.log(props.list);

  const dispatch = useDispatch();

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
  }, [props.allList]);

  console.log("List =>", props.list);

  const data = RANDOM_USERS.map((d) => ({
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
                  <span>Invite</span>
                </Invite>
              </TopRight>
            </DetailTop>
            <Border />
            <DetailBottom>
              <NewListContainer>
                <NewListModal />
              </NewListContainer>
            </DetailBottom>
          </DetailWrapper>
        </DetailContainer>
      </DragDropContext>
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
      default:
        break;
    }
  }
};

const mstp = (state) => {
  return {
    // list: state.allList.list,
    list: state.allList.list.filter((x) => {
      return x.boardId.length > 0
        ? x.boardId[0]._id === state.SelectedBoard.selectedBoard.id
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
