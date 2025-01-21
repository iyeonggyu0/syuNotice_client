import styled from "styled-components";
import MainLayOut from "../../layout";
import { useNavigate } from "react-router";
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
    user-select: none;
    font-size: 1.75rem;
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

const ApplyPage1 = () => {
  const nav = useNavigate();
  // 전체
  const [all, setAll] = useState(localStorage.getItem("1-all") === "true" ? true : false);
  // 수업
  const [class_, setClass] = useState(localStorage.getItem("1-class_") === "true" ? true : false);
  // 학적
  const [record, setRecord] = useState(localStorage.getItem("1-record") === "true" ? true : false);
  // 등록
  const [registration, setRegistration] = useState(localStorage.getItem("1-registration") === "true" ? true : false);
  // 채플
  const [chapel, setChapel] = useState(localStorage.getItem("1-chapel") === "true" ? true : false);

  console.log(all);

  useEffect(() => {
    if (class_ === true && record === true && registration === true && chapel === true) {
      setAll(true);
      return localStorage.setItem("1-all", true);
    }

    if (class_ === false || record === false || registration === false || chapel === false) {
      localStorage.setItem("1-all", false);
      return setAll(false);
    }
  }, [class_, record, registration, chapel]);

  const nextButton = (e) => {
    e.preventDefault();

    if (class_ === false && record === false && registration === false && chapel === false) {
      if (window.confirm("학사공지 알림을 받지 않습니다.")) {
        return nav("/apply/2");
      } else {
        return;
      }
    } else {
      return nav("/apply/2");
    }
  };

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            우선, <span style={{ fontWeight: 700 }}>학사공지</span>의
            <br />
            알림을 설정합니다!
          </p>
          <p>알림받을 항목을 선택하세요</p>
          <div>
            <div
              onClick={() => {
                const var_ = !all; // `class_`의 반대 값을 계산
                if (var_ === true) {
                  setClass(true);
                  localStorage.setItem("1-class_", true);
                  setRecord(true);
                  localStorage.setItem("1-record", true);
                  setRegistration(true);
                  localStorage.setItem("1-registration", true);
                  setChapel(true);
                  localStorage.setItem("1-chapel", true);
                }
                if (var_ === false) {
                  setClass(false);
                  localStorage.setItem("1-class_", false);
                  setRecord(false);
                  localStorage.setItem("1-record", false);
                  setRegistration(false);
                  localStorage.setItem("1-registration", false);
                  setChapel(false);
                  localStorage.setItem("1-chapel", false);
                }
                setAll(var_); // 상태 업데이트
                localStorage.setItem("1-all", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${all}`}>전체 알림 받기</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !class_; // `class_`의 반대 값을 계산
                setClass(var_); // 상태 업데이트
                localStorage.setItem("1-class_", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${class_}`}>수업</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !record; // `class_`의 반대 값을 계산
                setRecord(var_); // 상태 업데이트
                localStorage.setItem("1-record", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${record}`}>학적</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !registration; // `class_`의 반대 값을 계산
                setRegistration(var_); // 상태 업데이트
                localStorage.setItem("1-registration", var_); // `localStorage` 업데이트>
              }}>
              <ToggleComp toggle={`${registration}`}>등록</ToggleComp>
            </div>
            <div
              onClick={() => {
                const var_ = !chapel; // `class_`의 반대 값을 계산
                setChapel(var_); // 상태 업데이트
                localStorage.setItem("1-chapel", var_); // `localStorage` 업데이트
              }}>
              <ToggleComp toggle={`${chapel}`}>채플</ToggleComp>
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
export default ApplyPage1;
