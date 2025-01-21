import styled from "styled-components";
import { useMedia } from "../../hooks/useMedia";

const InputCompStyled = styled.div`
  color: #474a50;
  position: relative;

  & > input {
    width: 70vw;
    height: ${(props) => (props.isPc ? "55px" : "48px")};
    max-width: 300px;
    border-radius: 16px;
    cursor: text;
    user-select: none;
    transition: all 0.2s;
    box-shadow: inset 0px 0px ${(props) => (props.isPc ? "5px" : "3px")} rgba(0, 0, 0, 0.25);
    border-radius: ${(props) => (props.isPc ? "16px" : "8px")};
    padding-left: 25px;
  }

  & > input:focus {
    outline: none;
    box-shadow: inset 0px 0px ${(props) => (props.isPc ? "5px" : "3px")} #6ba2ff;
  }

  & > p {
    font-size: 0.8rem;
    padding-bottom: 6px;
    padding-left: 6px;
  }

  & > span {
    position: absolute;
    font-size: 0.8rem;
    padding: 10px;
    right: 15px;
    top: 29px;
    cursor: pointer;
  }
`;

// clickSituation : 클릭 가능 여부
const InputComp = ({ children, changeFunc, clickSituation = true, certification = null, example = "", password = null }) => {
  const isPc = useMedia().isPc;
  return (
    <InputCompStyled isPc={isPc}>
      <p>{children}</p>
      <input
        disabled={!clickSituation}
        placeholder={example}
        type={password || "text"}
        onChange={(e) => {
          changeFunc(e.target.value);
        }}
      />
      {certification && <span onClick={certification}>발송</span>}
    </InputCompStyled>
  );
};
export default InputComp;
