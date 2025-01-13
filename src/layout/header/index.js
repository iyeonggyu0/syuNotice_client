import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderMainStyle = styled.nav`
  height: 70px;
  display: flex;
  position: fixed;
  z-index: 999;
  padding: 0 30px;
  cursor: pointer;
`;

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderMainStyle className="flexHeightCenter">
      <span onClick={() => nav("/")}>
        <span style={{ fontWeight: 600 }}>SYU N</span>notice
      </span>
    </HeaderMainStyle>
  );
};
export default Header;
