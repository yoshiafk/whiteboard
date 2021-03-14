import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
  margin-bottom: 164px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 718px;
  height: 292px;
  top: 205px;
`;

export const Heading = styled.h1`
  height: 134px;
  width: 750px;
  font-weight: 800;
  font-size: 64px;
  line-height: 67px;
  text-align: center;
  margin-bottom: 26px;
  color: #363636;

  span {
    color: #4859ef;
  }
`;

export const SubHeading = styled.h2`
  width: 495px;
  height: 54px;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #363636;
  margin-bottom: 32px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 46px;
  background: #ff9e57;
  border-radius: 35px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
