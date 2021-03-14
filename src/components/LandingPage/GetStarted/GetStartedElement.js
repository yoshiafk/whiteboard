import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: #37266c;
  width: 100%;
  height: 470px;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 198px;
  margin: 132px auto 140px auto;
`;

export const Headline = styled.h1`
  color: white;
  font-weight: 800;
  font-size: 48px;
  line-height: 76.8px;
  text-align: center;
`;

export const SubHeadline = styled.h4`
  position: static;
  width: 100%;
  height: 27px;
  color: white;
  margin: 24px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`;

export const Button = styled.button`
  width: 241px;
  height: 46px;
  background: #ff9357;
  font-size: 16px;
  font-weight: 700px;
  color: white;
  border-radius: 35px;
  border: none;
  align-items: center;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
