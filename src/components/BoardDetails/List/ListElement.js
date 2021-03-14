import styled from "styled-components";

export const ListContainer = styled.div`
  max-height: 100%;
  margin-right: 32px;
  width: 400px;
  height: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #f3f3f3;
  // display: flex;
  // flex-direction: column;
  position: relative;
  white-space: normal;
`;

export const Container = styled.div``;
export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 29px;
  margin-left: 15px;
`;

export const Title = styled.div`
  height: 25px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #80848d;
`;

export const Count = styled.div`
  width: 38.91px;
  height: 19.25px;
  margin-left: 10px;
  background: #e1e1e1;
  border-radius: 67px;
  text-align: center;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #363636;
`;

export const Border = styled.hr`
  border: 1px solid #e1e1e1;
  width: 100%;
`;
export const BottomContainer = styled.div`
  margin: 10px;
  width: 400px;
`;

export const AddNewCard = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #80848d;
`;
