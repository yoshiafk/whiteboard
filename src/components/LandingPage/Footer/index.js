import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import logoWhite from "../../../assets/logoWhite.svg";
import globe from "../../../assets/globe.svg";
import {
  Container,
  Wrapper,
  Top,
  Left,
  Item,
  Title,
  Content,
  Right,
  Logo,
  Platform,
  PLogo,
  Divider,
  Bottom,
  BottomItem,
  BottomLeft,
  BottomRight,
  Copyright,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Item>
                <Title>Product</Title>
                <Content>Our Whiteboards</Content>
                <Content>Templates</Content>
                <Content>Stack Integration</Content>
                <Content>Dropbox Integration</Content>
              </Item>
              <Item>
                <Title>Company</Title>
                <Content>About</Content>
                <Content>Careers</Content>
              </Item>
              <Item>
                <Title>Support</Title>
                <Content>Help Center</Content>
                <Content>FAQ</Content>
                <Content>Contact us</Content>
              </Item>
            </Left>
            <Right>
              <Logo>
                <img src={logoWhite} alt="logo" />
              </Logo>
              <div>Available on</div>
              <Platform>
                <PLogo>
                  <FaApple size={33} />
                </PLogo>
                <PLogo>
                  <IoLogoGooglePlaystore size={33} />
                </PLogo>
              </Platform>
            </Right>
          </Top>
          <Divider />
          <Bottom>
            <BottomLeft>
              <BottomItem>
                <img src={globe} alt="globe" /> <span>English</span>
              </BottomItem>
              <BottomItem>Privacy Policy</BottomItem>
              <BottomItem>Terms &amp; Condition</BottomItem>
            </BottomLeft>
            <BottomRight>
              <Copyright>&copy; Copyright 2021 All right reserved</Copyright>
            </BottomRight>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
