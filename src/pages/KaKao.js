import styled from "styled-components";
import MainLayOut from "../layout";
import { useMedia } from "../hooks/useMedia";
export const KakaoMainStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  background-color: white;
  color: #474a50;

  & .title {
    width: 80vw;
    height: 180px;
    background-image: url("/img/bg/title_kakao.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: fixed;
  }

  & > a {
    position: absolute;
    bottom: ${(props) => (props.isPc ? "10vh" : "15vh")};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px;
    color: #474a50;
    border-bottom: 1px solid #474a50;
    font-weight: 500;
    transition: all 0.3s;
    user-select: none;
  }
`;

const KaKaoPage = () => {
  const isPc = useMedia().isPc;

  return (
    <MainLayOut>
      <KakaoMainStyle isPc={isPc} className="flexCenter">
        <div className="title">{/* 로고 */}</div>
        <a href="http://pf.kakao.com/_zgfjn/chat" target="_blank" rel="noopener noreferrer">
          <div className="img"></div> 문의하러 바로 가기 {">"}
        </a>
      </KakaoMainStyle>
    </MainLayOut>
  );
};
export default KaKaoPage;
