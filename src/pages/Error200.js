import styled from "styled-components";
import MainLayOut from "../layout";
import NextComp from "../components/_common/NextComp";
import { useNavigate } from "react-router-dom";

export const Error404MainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & .iconImg {
    width: 100%;
    margin: 0 auto;
    height: 45vw;
    max-width: 165px;
    max-height: 165px;

    background-image: url("/img/icon/200.png");
    background-repeat: no-repeat;
    background-size: contain;
    user-select: none;
  }

  & > div > p {
    font-weight: 400;
    user-select: none;
    font-size: 1.8rem;
    text-align: center;
    line-height: 150%;
    margin-top: 2vh;
    margin-bottom: 1vh;
  }

  & p:nth-child(3) {
    font-size: 0.8rem;
    line-height: 160%;
    margin-bottom: 5vh;
  }
`;

const Error200 = () => {
  const nav = useNavigate();

  return (
    <MainLayOut>
      <Error404MainStyle className="flexCenter">
        <div>
          <div className="iconImg">{/* 이미지 */}</div>
          <p>죄송합니다.</p>
          <p>
            서비스 이용 인원 초과로 인해
            <br />
            회원가입 진행이 불가능합니다.
          </p>
          <div onClick={() => nav("/")}>
            <NextComp>돌아가기</NextComp>
          </div>
        </div>
      </Error404MainStyle>
    </MainLayOut>
  );
};
export default Error200;
