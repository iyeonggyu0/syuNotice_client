import styled from "styled-components";
import { useMedia } from "../hooks/useMedia";
import { useNavigate } from "react-router-dom";
import MainLayOut from "../layout";

const MainPageMainPc = styled.section`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  color: #474a50;

  & > .title {
    width: 80vw;
    height: 180px;
    background-image: url("/img/bg/title.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: fixed;
    margin-top: 14vh;
  }

  & > p:last-child {
    position: absolute;
    bottom: ${(props) => (props.isPc ? "10vh" : "15vh")};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 10px;
    border-bottom: 1px solid #474a50;
    font-weight: 500;
    transition: all 0.3s;
  }

  & > p:last-child:hover {
    color: rgb(127, 128, 130);
    transition: all 0.3s;
  }
`;

const MainPage = () => {
  const isPc = useMedia().isPc;
  const bgImage = isPc ? "/img/bg/PCBG.png" : "/img/bg/MobileBG.png";
  const nav = useNavigate();

  return (
    <MainLayOut>
      <MainPageMainPc isPc={isPc} bgImage={bgImage} className="flexWidthCenter">
        <div className="title">{/* 로고 */}</div>
        <p onClick={() => nav("/apply/0")} className="emoji">
          내 번호로 알림받기
        </p>
      </MainPageMainPc>
    </MainLayOut>
  );
};

export default MainPage;
