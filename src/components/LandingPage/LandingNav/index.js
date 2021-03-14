import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logoBW from "../../../assets/LogoBW.png";
import {
  Container,
  Logo,
  LeftSide,
  LeftNavItem,
  LeftNavMenu,
  RightSide,
  RightMenu,
  RightItem,
  Button,
} from "./LandingNavElement";

const LandingNav = () => {
  return (
    <Container>
      <LeftSide>
        <Link to="/">
          <Logo src={logoBW} alt="logo" />
        </Link>
        <LeftNavMenu>
          <LeftNavItem>Products</LeftNavItem>
          <LeftNavItem>Support</LeftNavItem>
        </LeftNavMenu>
      </LeftSide>
      <RightSide>
        <RightMenu>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <RightItem>
              <FaUserCircle /> Log in
            </RightItem>
          </Link>
          <Link to="/signup">
            <Button>Sign up free</Button>
          </Link>
        </RightMenu>
      </RightSide>
    </Container>
  );
};

export default LandingNav;
