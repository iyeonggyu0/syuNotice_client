import styled from "styled-components";
import MainLayOut from "../../layout";
import NextComp from "../../components/_common/NextComp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ApplyPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & .iconImg {
    width: 45vw;
    height: 45vw;
    max-width: 165px;
    max-height: 165px;

    background-image: url("/img/icon/hello.png");
    background-repeat: no-repeat;
    background-size: contain;
    user-select: none;
  }

  & > div {
    max-width: 300px;
    flex-wrap: wrap;
    position: relative;
  }

  & > div > p {
    font-weight: 400;
    user-select: none;
    font-size: 2rem;
    text-align: center;
    line-height: 150%;
    margin-top: 2vh;
    margin-bottom: 5vh;
  }
`;

const ApplyPage = () => {
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/user-num`)
      .then((res) => {})
      .catch((err) => {
        if (err.status === 400) {
          nav("/200");
        }
      });
  }, []);

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <div className="iconImg">{/* 인사 아이콘 */}</div>
          <p>
            <span style={{ fontWeight: 700 }}>SYU Notice</span>에
            <br />
            오신 것을 환영합니다!
          </p>
          <div onClick={() => nav("/apply/1")}>
            <NextComp>다음</NextComp>
          </div>
        </div>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage;
