import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Container,
} from "./InfoSectionElement";

function InfoSection({ headline, description, img, alt, imgStart, start }) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <a href="/">Learn more about Whiteboard board → </a>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
