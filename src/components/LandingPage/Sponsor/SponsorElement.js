import styled from "styled-components";

export const Container = styled.div`
  margin-top: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  width: 800px;
  height: 71px;
  font-weight: 800;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  margin-bottom: 12px;
  color: #363636;
`;

export const SubHeading = styled.h4`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #363636;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 43px;
  margin-bottom: 173px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
  }
`;

export const Brand = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 54px;
  width: 224px;
  height: 64px;
`;

export const Img = styled.img``;
