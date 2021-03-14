import styled from "styled-components";

export const Section = styled.div`
  /* padding: 100px 0 160px; */
  margin: 12vh 0 23vh 6vw;
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background: white;
  width: 90vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* width: 90vw; */

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  color: black;
  font-size: 48px;
  font-weight: 800px;
  line-height: 70.2px;
  margin-bottom: 24px;
  text-align: center;
`;

export const SubHeading = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: 700px;
  line-height: 32px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 317px;
  height: 439px;
  margin: 94px;
  align-items: center;
  color: black;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 326px;
  height: 46px;
  background: #4859ef;
  border-radius: 35px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700px;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
