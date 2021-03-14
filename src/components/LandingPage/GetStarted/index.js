import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Headline,
  SubHeadline,
  Button,
} from "./GetStartedElement";

const GetStarted = () => {
  return (
    <Container>
      <Wrapper>
        <Headline>Join over 10 milions users</Headline>
        <SubHeadline>
          Start planning today – Save time, stay focused and work smarter with
          Whiteboard
        </SubHeadline>
        <Link to="/signup">
          <Button>Get Started - It's FREE</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default GetStarted;
