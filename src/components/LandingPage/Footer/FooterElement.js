import styled from "styled-components";

export const Container = styled.div`
  background-color: #37266c;
  height: 35vh;
  @media screen and (max-width: 960px) {
    height: 42vh;
  }
`;

export const Wrapper = styled.div`
  margin: 0 150px;
  color: white;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px 0;
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Right = styled.div`
  text-align: right;
`;
export const Item = styled.div`
  margin-right: 86px;
`;
export const Title = styled.h5`
  margin-bottom: 13px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #ffdbda;
`;
export const Content = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

export const Logo = styled.div`
  img {
    width: 119.77px;
    height: 19.34px;
  }
`;
export const Platform = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

export const PLogo = styled.div`
  justify-content: space-between;
`;

export const Divider = styled.div`
  height: 0px;
  border-top: 0.2px solid #ffffff;
`;

export const Bottom = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomItem = styled.div`
  margin-right: 45px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;

  img {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
`;

export const BottomRight = styled.div``;

export const Copyright = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
