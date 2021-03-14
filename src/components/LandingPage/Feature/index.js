import React from "react";
import rocket from "../../../assets/images/roket.svg";
import vr from "../../../assets/images/vr.svg";
import man from "../../../assets/images/man.svg";
import {
  Section,
  Wrapper,
  Heading,
  Container,
  Info,
  Title,
  Description,
  Button,
  SubHeading,
  Img,
} from "./FeatureElement";
import { Link } from "react-router-dom";

function Feature() {
  return (
    <Section>
      <Wrapper>
        <Heading>Whiteboard Your Way</Heading>
        <SubHeading>
          Use Whiteboard the way your team works best. We’ve got the flexibility
          &amp; features to fit any team’s style.
        </SubHeading>
        <Container>
          <Info>
            <Img src={rocket} alt="" />
            <Title>Light &amp; Fast</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            </Description>
          </Info>

          <Info>
            <Img src={vr} alt="" />
            <Title>All-in-one</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            </Description>
          </Info>

          <Info>
            <Img src={man} alt="" />
            <Title>Easy monitoring</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            </Description>
          </Info>
        </Container>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>Work Together on Whiteboard &rarr;</Button>
        </Link>
      </Wrapper>
    </Section>
  );
}
export default Feature;
