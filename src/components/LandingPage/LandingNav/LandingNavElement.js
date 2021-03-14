import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  background: white;
  width: 100%;
  height: 80px;
  z-index: 999;
`;

export const LeftSide = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  position: static;
  width: 185.77px;
  height: 50px;
  margin: 9px;
  margin-left: 150px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    margin-left: 100px;
  }
`;
export const LeftNavMenu = styled.ul`
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  list-style: none;
  margin-left: 25px;
  @media screen and (max-width: 960px) {
    margin-left: 10px;
  }
`;
export const LeftNavItem = styled.li`
  padding: 24px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #363636;
  cursor: pointer;
`;
export const RightSide = styled.div`
  display: flex;
  margin-right: 150px;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const RightItem = styled.div`
  width: 78px;
  display: flex;
  align-items: center;
  margin: 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4859ef;
  cursor: pointer;
  svg {
    color: grey;
    margin-right: 8px;
  }

  @media screen and (max-width: 960px) {
    width: 70px;
    height: 46px;
  }
`;
export const Button = styled.button`
  width: 158px;
  height: 46px;
  background: #4859ef;
  align-items: center;
  color: white;
  border-radius: 35px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 960px) {
    width: 130px;
    height: 46px;
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
  }
`;
