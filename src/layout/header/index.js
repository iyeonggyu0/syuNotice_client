import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const HeaderMainStyle = styled.nav`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  padding: 0 45px;
  font-size: 0.9rem;

  & > p {
    cursor: pointer;
  }

  & > p:nth-child(2) > span {
    margin-left: 12px;
  }

  & > p:nth-child(2) > span,
  & p:nth-child(1) {
    padding: 5px;
  }
`;

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderMainStyle className="flexHeightCenter">
      <p onClick={() => nav("/")}>
        <span style={{ fontWeight: 600 }}>SYU N</span>notice
      </p>
      <p>
        <span onClick={() => nav("/kakao")}>문의</span>
        <span onClick={() => nav("/d")}>알림끄기</span>
      </p>
    </HeaderMainStyle>
  );
};
export default Header;
