import styled from "styled-components";
import MainLayOut from "../../layout";
import InputComp from "../../components/_common/InputComp";
import { useState } from "react";
import NextComp from "../../components/_common/NextComp";
import { encrypt } from "../../util/crypto";
import { useNavigate } from "react-router-dom";

export const AdminLoginPageMainStyle = styled.section`
  width: 100vw;
  height: 100vh;

  & > div > .next {
    margin-top: 3vh;
  }
`;

const AdminLoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const nav = useNavigate();

  const idChangeFunc = (str) => {
    setId(str);
  };

  const pwChangeFunc = (str) => {
    setPw(str);
  };

  const loginFunc = (e) => {
    e.preventDefault();

    if (pw !== process.env.REACT_APP_ADMIN_PW) {
      return console.log("오류1");
    }
    if (id !== process.env.REACT_APP_ADMIN_ID) {
      return console.log("오류2");
    }

    const now = new Date();
    const item = {
      value: encrypt(process.env.REACT_APP_COOKIE, process.env.REACT_APP_ADMIN_HC),
      expiry: now.getTime() + 3600000, // 현재 시간 + TTL(ms)
    };
    localStorage.setItem("adminLoginKey", JSON.stringify(item));

    return nav("/admin");
  };

  return (
    <MainLayOut>
      <AdminLoginPageMainStyle className="flexCenter">
        <div>
          <InputComp password={"password"} changeFunc={pwChangeFunc}></InputComp>
          <InputComp password={"password"} changeFunc={idChangeFunc}></InputComp>
          <div className="next" onClick={loginFunc}>
            <NextComp>login</NextComp>
          </div>
        </div>
      </AdminLoginPageMainStyle>
    </MainLayOut>
  );
};
export default AdminLoginPage;
