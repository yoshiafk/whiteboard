import styled from "styled-components";

export const DetailContainer = styled.div`
  height: 100vh;
  margin-top: 30px;
  margin-left: 40px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
export const DetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  position: relative;
  transition: margin 0.1s ease-in;
`;
export const DetailTop = styled.div`
  display: flex;
  // justify-content: space-between;
  height: auto;
  padding: 8px 4px 4px 8px;
  position: relative;
`;

export const TopLeft = styled.div``;

export const Title = styled.div`
  font-size: 31px;
  color: #363636;
  margin-bottom: 20px;
  font-weight: bold;
  span {
    margin-right: 20px;
  }
`;
export const TopRight = styled.div`
  margin-top: 45px;
  margin-right: 32px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.div`
  margin-right: 16px;
`;

export const Invite = styled.button`
  width: 99px;
  height: 46px;
  background-color: #eff1ff;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  outline: none;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #4859ef;
  }
`;

export const Border = styled.hr`
  border: 1px solid #e1e1e1;
  margin-top: 21px;
`;

export const BoardList = styled.div`
  // user-select: none;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  // margin-bottom: 120px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  // position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export const DetailBottom = styled.div`
  position: relative;
  flex-grow: 1;
  margin-top: 18px;
`;

export const NewListContainer = styled.div`
  margin-top: 18px;
`;

export const NewListButton = styled.button`
  background: #eff1ff;
  border: 1px dashed #4859ef;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 358px;
  height: 98px;
  cursor: pointer;
  outline: none;
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #4859ef;
  }
`;

export const Address = styled.div`
  color: #80848d;
  font-size: 90%;
`;
