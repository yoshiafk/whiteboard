import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TaskCard from "../Cards";
import { connect } from "react-redux";
// import { getCardTask } from "../../../redux/CardTask/actions";
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
import NewTaskModal from "../Modal/NewTaskModal";

// import AddCard from "../Cards/addCard";

const ListDetail = ({
  // getCardAction,
  cardTask,
  judul,
  key,
  total,
  id,
  index,
  cards,
  listID,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(Boolean(isOpen));
  // useEffect(() => {
  //   getCardAction();
  // }, []);

  // useEffect(() => {
  //   props.getListAction();
  // }, []);

  // console.log("card =>", cardTask);
  console.log("halaman list", id);
  console.log("halaman list", index);

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
                  {provided.placeholder}
                  <AddNewCard onClick={() => setIsOpen(true)}>
                    + Add new card
                    {/* <NewTaskModal>+ Add new card</NewTaskModal> */}
                    {/* <NewTaskModal
                      onClose={() => setIsOpen(false)}
                      isOpen={isOpen}
                    /> */}
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
};

// const mstp = (state) => {
//   return {
//     cardTask: state.cardTask.task,
//   };
// };

// const mdtp = (dispatch) => {
//   return {
//     getCardAction: () => dispatch(getCardTask()),
//   };
// };

export default connect()(ListDetail);
