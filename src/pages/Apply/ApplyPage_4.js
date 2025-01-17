import styled from "styled-components";
import MainLayOut from "../../layout/index.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NextComp from "../../components/_common/NextComp.js";
import InputComp from "../../components/_common/InputComp.js";

const ApplyPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & > div > p:nth-child(2) {
    line-height: 150%;
    text-align: center;
  }

  & > div {
    max-width: 300px;
    flex-wrap: wrap;
    position: relative;
  }

  & > div > p:first-child {
    font-weight: 400;
    user-select: none;
    font-size: 1.8rem;
    text-align: center;
    line-height: 150%;
    margin-bottom: 1vh;
  }

  & > div > p:nth-child(2) {
    font-size: 0.9rem;
    user-select: none;
    color: gray;
    margin-bottom: 3vh;
  }

  & > div > div:nth-child(3) > div {
    margin-bottom: 12px;
  }

  & > div > div:last-child {
    margin: 3vh;
  }
`;

const ApplyPage4 = () => {
  const nav = useNavigate();
  // 키워드
  const [keyword, setKeyword] = useState("");

  const keyWordInputFunc = (string) => {
    setKeyword(string);
    localStorage.setItem("4-keyword", keyword.replace(/\s+/g, ""));
  };

  const nextButton = (e) => {
    e.preventDefault();

    if (keyword.replace(/\s+/g, "").length === 0) {
      if (window.confirm("키워드 알림을 받지 않습니다.")) {
        localStorage.setItem("4-keyword", keyword.replace(/\s+/g, ""));
        return nav("/apply/5");
      } else {
        return;
      }
    } else {
      localStorage.setItem("4-keyword", keyword.replace(/\s+/g, ""));
      return nav("/apply/5");
    }
  };

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>사용자 키워드</span>를
            <br />
            설정합니다.
          </p>
          <p>
            단어가 포함된 공지에 대한 알림을 받아요
            <br />
            '/'로 키워드를 구분 하며, 앞 뒤로 띄어쓰기 금지
          </p>
          <InputComp changeFunc={keyWordInputFunc} example={"학자금 대출/신입생"}>
            키워드
          </InputComp>
          <div onClick={nextButton}>
            <NextComp>다음</NextComp>
          </div>
        </div>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage4;
