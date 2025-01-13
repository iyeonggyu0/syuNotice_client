import styled from "styled-components";
import MainLayOut from "../../layout/index.js";
import { useEffect } from "react";
import InputComp from "../../components/_common/InputComp.js";

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

const ApplyPage3 = () => {
  const class_1 = localStorage.getItem("1-class_") || "false";
  const record_1 = localStorage.getItem("1-record") || "false";
  const registration_1 = localStorage.getItem("1-registration") || "false";
  const chapel_1 = localStorage.getItem("1-chapel") || "false";

  const newbie_2 = localStorage.getItem("2-newbie") || "false";
  const transfer_2 = localStorage.getItem("2-transfer") || "false";
  const student_2 = localStorage.getItem("2-student") || "false";

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>마지막</span>단계예요!
          </p>
          <p>이미 등록된 경우 기존 설정을 수정해요</p>
          <div>
            <InputComp>학번</InputComp>
          </div>
        </div>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage3;
