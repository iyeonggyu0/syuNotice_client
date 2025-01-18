import styled from "styled-components";
import MainLayOut from "../../layout/index.js";
import { useEffect, useState } from "react";
import InputComp from "../../components/_common/InputComp.js";
import axios from "axios";
import { encrypt } from "../../util/crypto.js";
import NextComp from "../../components/_common/NextComp.js";
import { useNavigate } from "react-router-dom";

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
    margin-bottom: 16px;
  }

  & > div > div:last-child {
    margin-top: 3vh;
  }

  & .flexHeightCenter {
    user-select: none;
  }
`;

const ApplyPage5 = () => {
  const nav = useNavigate();
  const class_1 = localStorage.getItem("1-class_");
  const record_1 = localStorage.getItem("1-record");
  const registration_1 = localStorage.getItem("1-registration");
  const chapel_1 = localStorage.getItem("1-chapel");
  // 장학
  const receive_2 = localStorage.getItem("2-receive");
  // 행사
  const receive_3 = localStorage.getItem("3-receive");

  const keyword_4 = localStorage.getItem("4-keyword") || "false";

  console.log(typeof class_1, typeof record_1, typeof registration_1, typeof chapel_1, typeof receive_2, typeof receive_3, typeof keyword_4);

  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentNam] = useState("");
  const [pn, setPn] = useState("");
  const [pw, setPw] = useState("");

  const [pnChange, setPnChange] = useState(true);

  // 전체 비어있음 체크
  useEffect(() => {
    if (
      class_1 === "false" &&
      record_1 === "false" &&
      registration_1 === "false" &&
      chapel_1 === "false" &&
      receive_2 === "false" &&
      receive_3 === "false" &&
      keyword_4 === "false"
    ) {
      alert("알림을 아무것도 선택하지 않으셨습니다.");
      nav("/apply/1");
    }
    // eslint-disable-next-line
  }, []);

  // 학번 func
  const studentIdFunc = (string) => {
    setStudentId(string);
  };

  // 이름 func
  const studentNameFunc = (string) => {
    setStudentNam(string);
  };

  // 번호 func
  const studentPnFunc = (string) => {
    setPn(string);
  };

  // 비밀번호 func
  const studentPwFunc = (string) => {
    setPw(string);
  };

  // 발송
  const SendAuthentication = (e) => {
    e.preventDefault();

    if (!pnChange) {
      return;
    }

    if (studentId.length !== 10) {
      return alert("학번을 확인해 주세요");
    }

    if (/^(010|011|016|017|018|019)\d{8}$/.test(pn)) {
      axios
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
          if (err.data) {
            alert(err.data);
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
      return alert("인증번호는 숫자만 입력 가능합니다");
    }

    const postData = {
      pw: pw,
      studentId: studentId,
      data: encrypt(
        {
          studentName: studentName,
          pn: pn,
          //데이터
          class_1: class_1,
          record_1: record_1,
          registration_1: registration_1,
          chapel_1: chapel_1,
          receive_2: receive_2,
          receive_3: receive_3,
          keyword_4: keyword_4.split("/"),
        },
        studentId
      ),
    };

    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/sing-up`, postData)
      .then((res) => {
        if (res.status === 201) {
          return nav("/apply/6");
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
          alert("예상치 못한 오류가 발생했습니다.");
        }
      });
  };

  const [agreement, setAgreement] = useState(false);

  const handleCheckboxChange = () => {
    setAgreement((prevAgreement) => !prevAgreement);
  };

  return (
    <MainLayOut>
      <ApplyPageMainStyle className="flexCenter">
        <div className="flexCenter">
          <p>
            <span style={{ fontWeight: 700 }}>마지막</span>단계예요!
          </p>
          <p>이미 등록된 경우 기존 설정을 수정해요</p>
          <div>
            <InputComp changeFunc={studentIdFunc}>학번</InputComp>
            <InputComp changeFunc={studentNameFunc}>이름</InputComp>
            <InputComp clickSituation={pnChange} changeFunc={studentPnFunc} certification={SendAuthentication}>
              핸드폰 번호
            </InputComp>
            <InputComp changeFunc={studentPwFunc}>인증번호</InputComp>
            <div className="flexHeightCenter">
              <label>
                <input type="checkbox" checked={agreement} onChange={handleCheckboxChange} style={{ cursor: "pointer" }} />
                <span style={{ marginLeft: "10px", cursor: "pointer", fontSize: "0.9rem", color: "#222222" }}>약관에 동의합니다.</span>
                <a
                  href="/agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "6px", cursor: "pointer", fontSize: "0.8rem", color: "darkgray" }}>
                  (약관 보기)
                </a>
              </label>
            </div>
          </div>
          <div onClick={registrationFunc}>
            <NextComp>완료</NextComp>
          </div>
        </div>
      </ApplyPageMainStyle>
    </MainLayOut>
  );
};
export default ApplyPage5;
