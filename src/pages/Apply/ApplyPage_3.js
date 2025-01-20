import styled from "styled-components";
import MainLayOut from "../../layout/index.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ToggleComp from "../../components/_common/TogleComp.js";
import NextComp from "../../components/_common/NextComp.js";

const ApplyPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & > div {
    max-width: 300px;
    flex-wrap: wrap;
    position: relative;
  }

  & > div > p:first-child {
    font-weight: 400;
    font-size: 1.8rem;
    user-select: none;
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

const ApplyPage3 = () => {
  const nav = useNavigate();
  // 전체
  const [receive, setReceive] = useState(localStorage.getItem("3-receive") === "false" ? false : true);

  const nextButton = (e) => {
    e.preventDefault();

    if (!receive) {
      if (window.confirm("행사공지 알림을 받지 않습니다.")) {
        return nav("/apply/4");
      } else {
        return;
      }
    } else {
      localStorage.setItem("3-receive", receive);
      return nav("/apply/4");
    }
  };

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>행사공지</span>의
            <br />
            알림을 설정합니다!
          </p>
          <p>알림을 받으시겠습니까?</p>
          <div>
            <div
              onClick={() => {
                const var_ = !receive; // `class_`의 반대 값을 계산
                setReceive(var_); // 상태 업데이트
                localStorage.setItem("3-receive", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${receive}`}>예</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !receive; // `class_`의 반대 값을 계산
                setReceive(var_); // 상태 업데이트
                localStorage.setItem("3-receive", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${!receive}`}>아니요</ToggleComp>
            </div>
          </div>
          <div onClick={nextButton}>
            <NextComp>다음</NextComp>
          </div>
        </div>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage3;
