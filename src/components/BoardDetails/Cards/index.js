import React from "react";
// import { RANDOM_USERS } from "./data";
import AvatarGroup from "@atlaskit/avatar-group";
import { GrAttachment } from "react-icons/gr";
import {
  Card,
  Wrapper,
  Label,
  LabelTitle,
  Title,
  Bottom,
  Left,
  Right,
  Priority,
  AssignedUser,
} from "./TaskCardElement";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({
  cardID,
  label,
  priority,
  title,
  index,
  assignedUser,
  key,
}) => {
  const userData = assignedUser.map((d) => ({
    email: d.email,
    key: d.email,
    name: d.name,
    // href: "#",
  }));
  return (
    <>
      <Draggable draggableId={String(cardID)} index={index}>
        {(provided) => (
          <Card
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Wrapper>
              <Label style={{ backgroundColor: "#FF0000" }}>
                <LabelTitle>{label}</LabelTitle>
              </Label>
              <Title>{title}</Title>
              <Bottom>
                <Left>
                  <GrAttachment />
                </Left>
                <Right>
                  <Priority>{priority}</Priority>
                  <AssignedUser>
                    <AvatarGroup
                      maxCount="3"
                      appearance="stack"
                      size="small"
                      data={userData}
                    />
                  </AssignedUser>
                </Right>
              </Bottom>
            </Wrapper>
          </Card>
        )}
      </Draggable>
    </>
  );
};

export default TaskCard;
