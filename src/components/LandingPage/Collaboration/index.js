import React from "react";
import sitdown from "../../../assets/images/sitdown.png";
import {
  Container,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./CollaborationElement";

function Collaboration() {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading>Scale collaboration with confidence</Heading>
                <Subtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque eget pretium augue, quis ornare nisl. Lorem ipsum
                  dolor sit amet, consectetur adipiscing.
                </Subtitle>
                <a href="/">Learn more about Whiteboard board → </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={sitdown} alt="" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Collaboration;
