import styled from "styled-components";
import MainLayOut from "../../layout";
import NextComp from "../../components/_common/NextComp";
import { useNavigate } from "react-router";

const ApplyPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & .iconImg {
    width: 45vw;
    height: 45vw;
    max-width: 165px;
    max-height: 165px;

    background-image: url("/img/icon/end.webp");
    background-repeat: no-repeat;
    background-size: contain;
    user-select: none;
  }

  & > div {
    max-width: 300px;
    flex-wrap: wrap;
    position: relative;
  }

  & > div > p:nth-child(2) {
    font-weight: 400;
    user-select: none;
    font-size: 1.75rem;
    text-align: center;
    line-height: 150%;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  & > div > p:nth-child(3) {
    width: 45vw;
    font-size: 0.9rem;
    user-select: none;
    color: gray;
    margin-bottom: 7vh;
    text-align: center;
  }

  & > p:last-child {
    position: absolute;
    width: 100vw;
    user-select: none;
    font-size: 0.8rem;
    bottom: 30px;
    text-align: center;
    color: gray;
    cursor: pointer;
  }
`;

const ApplyPage6 = () => {
  const nav = useNavigate();

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <div className="iconImg">{/* 인사 아이콘 */}</div>
          <p>
            <span style={{ fontWeight: 700 }}>성공적</span>으로
            <br />
            <span style={{ fontWeight: 700 }}>등록</span>되었어요!
          </p>
          <p>매주 금요일, 추가된 공지 개수를 안내받아요</p>
          <div onClick={() => nav("/")}>
            <NextComp>돌아가기</NextComp>
          </div>
        </div>
        <p onClick={() => nav("/d")}>알림 받지 않기</p>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage6;
