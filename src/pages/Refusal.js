import styled from "styled-components";
import MainLayOut from "../layout/index.js";
import { useState } from "react";
import InputComp from "../components/_common/InputComp.js";
import axios from "axios";
import { encrypt } from "../util/crypto.js";
import NextComp from "../components/_common/NextComp.js";
import { useNavigate } from "react-router";

const RefusalPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & > div {
    max-width: 300px;
    flex-wrap: wrap;
    position: relative;
  }

  & > div > p:first-child {
    user-select: none;
    font-weight: 400;
    font-size: 1.75rem;
    text-align: center;
    line-height: 150%;
    margin-bottom: 1vh;
  }

  & > div > p:nth-child(2) {
    user-select: none;
    font-size: 0.9rem;
    color: gray;
    margin-bottom: 3vh;
  }

  & > div > div:nth-child(3) > div {
    margin-bottom: 16px;
  }

  & > div > div:last-child {
    margin-top: 3vh;
  }
`;

const RefusalPage = () => {
  const nav = useNavigate();
  const [studentId, setStudentId] = useState("");
  const [pn, setPn] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const [pnChange, setPnChange] = useState(true);

  // 학번 func
  const studentIdFunc = (string) => {
    setStudentId(string);
  };

  // 번호 func
  const studentPnFunc = (string) => {
    setPn(string);
  };

  // 비밀번호 func
  const studentPwFunc = (string) => {
    setPw(string);
  };

  // 비밀번호 func
  const nameFunc = (string) => {
    setName(string);
  };

  // 발송
  const SendAuthentication = async (e) => {
    e.preventDefault();

    if (!pnChange) {
      return;
    }

    if (studentId.length !== 10) {
      return alert("학번을 확인해 주세요");
    }

    if (/^(010|011|016|017|018|019)\d{8}$/.test(pn)) {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/api/user/send-phonenumber`, {
          student_id: studentId,
          student_PN: encrypt(pn, studentId),
        })
        .then((res) => {
          if (res.status === 201) {
            alert(res.data);
            setPnChange(false);
          }
        })
        .catch((err) => {
          if (err.response.data) {
            alert(err.response.data);
            console.error(err);
          }
        });
    }
  };

  // 최종 확인
  const registrationFunc = async (e) => {
    e.preventDefault();
    if (studentId.length !== 10) {
      return alert("학번을 확인해 주세요");
    }

    if (/[^0-9]/g.test(studentId)) {
      return alert("학번은 숫자만 입력해 주세요");
    }

    if (!/^(010|011|016|017|018|019)\d{8}$/.test(pn)) {
      return alert("핸드폰 번호를 확인하세요");
    }

    if (/[^0-9]/g.test(pw)) {
      return alert("인증 번호는 숫자만 입력할 수 있습니다.");
    }

    if (!window.confirm("정말 알림을 끄시겠습니까?")) {
    }

    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/delete`, {
        student_id: studentId,
        pn: encrypt(pn, studentId),
        name: encrypt(name, studentId),
        pw: pw,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("이용해 주셔서 감사했습니다.");
          return nav("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          // err.response가 존재하면 서버 응답에 대한 오류
          console.log(err.response.data);

          // 상태 코드별로 다른 에러 처리
          if (err.response.status === 401) {
            alert(err.response.data); // 인증 오류
          } else if (err.response.status === 402) {
            setPnChange(true);
            alert(err.response.data); // 유효 시간 초과 오류
          } else if (err.response.status === 403) {
            setPnChange(true);
            alert(err.response.data); // 인증번호 미발송 오류
          } else {
            alert("예상치 못한 오류가 발생했습니다.");
            window.location.reload(true); // 기타 오류 시 페이지 리로드
          }
        } else {
          // err.response가 존재하지 않으면 네트워크 오류 등
          console.log("Network or unexpected error:", err);
          alert("네트워크 오류나 예상치 못한 오류가 발생했습니다.");
        }
      });
  };

  return (
    <MainLayOut>
      <RefusalPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>주의!</span> 더 이상
            <br />
            알림이 오지 않아요
          </p>
          <p>이용해 주셔서 감사했습니다</p>
          <div>
            <InputComp changeFunc={studentIdFunc}>학번</InputComp>
            <InputComp changeFunc={nameFunc}>이름</InputComp>
            <InputComp clickSituation={pnChange} changeFunc={studentPnFunc} certification={SendAuthentication}>
              핸드폰 번호
            </InputComp>
            <InputComp changeFunc={studentPwFunc}>인증번호</InputComp>
          </div>
          <div onClick={registrationFunc}>
            <NextComp>완료</NextComp>
          </div>
        </div>
      </RefusalPageMainStyle>
    </MainLayOut>
  );
};
export default RefusalPage;
