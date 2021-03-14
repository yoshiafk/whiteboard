import React from "react";
import cisco from "../../../assets/images/cisco.svg";
import dell from "../../../assets/images/dell.svg";
import deloitte from "../../../assets/images/deloitte.svg";
import hp from "../../../assets/images/hp.svg";
import salesforce from "../../../assets/images/salesforce.svg";
import {
  Container,
  Wrapper,
  Heading,
  SubHeading,
  Content,
  Brand,
  Img,
} from "./SponsorElement";

const Sponsor = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Work smarter with Whiteboard</Heading>
          <SubHeading>join with 10M+ user worldwide</SubHeading>
          <Content>
            <Brand>
              <Img src={cisco} alt="cisco" />
            </Brand>
            <Brand>
              <Img src={dell} alt="dell" />
            </Brand>
            <Brand>
              <Img src={deloitte} alt="deloitte" />
            </Brand>
            <Brand>
              <Img src={hp} alt="hp" />
            </Brand>
            <Brand>
              <Img src={salesforce} alt="salesforce" />
            </Brand>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Sponsor;
