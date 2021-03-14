import React from "react";
import { Link } from "react-router-dom";
import { Container, Heading, SubHeading, Button, Wrapper } from "./HeroElement";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          Where distributed teams <span>get work done</span> ✨
        </Heading>
        <SubHeading>
          The online collaborative to-do list platform to bring teams together,
          anytime, anywhere.
        </SubHeading>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>Start a board</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Hero;
