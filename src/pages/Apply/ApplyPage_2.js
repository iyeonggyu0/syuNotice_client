import styled from "styled-components";
import MainLayOut from "../../layout/index.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
    text-align: center;
    line-height: 150%;
    margin-bottom: 1vh;
  }

  & > div > p:nth-child(2) {
    font-size: 0.9rem;
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

const ApplyPage2 = () => {
  const nav = useNavigate();
  // 전체
  const [all, setAll] = useState(localStorage.getItem("2-all") === "true" ? true : false);
  // 신입생
  const [newbie, setNewbie] = useState(localStorage.getItem("2-newbie") === "true" ? true : false);
  // 편입생
  const [transfer, setTransfer] = useState(localStorage.getItem("2-transfer") === "true" ? true : false);
  // 재학생
  const [student, setStudent] = useState(localStorage.getItem("2-student") === "true" ? true : false);

  useEffect(() => {
    if (newbie === true && transfer === true && student === true) {
      setAll(true);
      return localStorage.setItem("2-all", true);
    }

    if (newbie === false && transfer === false && student === false) {
      localStorage.setItem("2-all", false);
      return setAll(false);
    }
  }, [newbie, transfer, student]);

  const nextButton = (e) => {
    e.preventDefault();
    console.log("실행");

    if (newbie === false && transfer === false && student === false) {
      if (window.confirm("장학공지 알림을 받지 않습니다.")) {
        // 예
        const a = localStorage.getItem("1-all") || "false";
        const b = localStorage.getItem("1-class_") || "false";
        const c = localStorage.getItem("1-record") || "false";
        const d = localStorage.getItem("1-registration") || "false";
        const e = localStorage.getItem("1-chapel") || "false";
        console.log(a, b, c, d, e);

        if (a === "false" && b === "false" && c === "false" && d === "false" && e === "false") {
          return alert("학사/장학 중 1개 이상 택");
        } else {
          return nav("/apply/3");
        }
      } else {
        return;
      }
    } else {
      return nav("/apply/3");
    }
  };

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>장학공지</span>의
            <br />
            알림을 설정합니다!
          </p>
          <p>공지 제목에 아래의 표현이 들어갈 때 알림 받아요</p>
          <div>
            <div
              onClick={() => {
                const var_ = !all; // `class_`의 반대 값을 계산
                if (var_ === true) {
                  setNewbie(true);
                  localStorage.setItem("2-newbie", true);
                  setTransfer(true);
                  localStorage.setItem("2-transfer", true);
                  setStudent(true);
                  localStorage.setItem("2-student", true);
                }
                if (var_ === false) {
                  setNewbie(false);
                  localStorage.setItem("2-newbie", false);
                  setTransfer(false);
                  localStorage.setItem("2-transfer", false);
                  setStudent(false);
                  localStorage.setItem("2-student", false);
                }
                setAll(var_); // 상태 업데이트
                localStorage.setItem("2-all", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${all}`}>전체 알림 받기</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !newbie; // `class_`의 반대 값을 계산
                setNewbie(var_); // 상태 업데이트
                localStorage.setItem("2-newbie", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${newbie}`}>신입생</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !transfer; // `class_`의 반대 값을 계산
                setTransfer(var_); // 상태 업데이트
                localStorage.setItem("2-transfer", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${transfer}`}>편입생</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !student; // `class_`의 반대 값을 계산
                setStudent(var_); // 상태 업데이트
                localStorage.setItem("2-student", var_); // `localStorage` 업데이트>
              }}>
              <ToggleComp toggle={`${student}`}>재학생</ToggleComp>
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
export default ApplyPage2;
