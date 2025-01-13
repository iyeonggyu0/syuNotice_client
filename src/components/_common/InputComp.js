import styled from "styled-components";
import { useMedia } from "../../hooks/useMedia";

const InputCompStyled = styled.div`
  color: #474a50;

  & > input {
    width: 70vw;
    height: ${(props) => (props.isPc ? "55px" : "50px")};
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
    padding-bottom: 12px;
    padding-left: 6px;
  }
`;

const InputComp = ({ children, changeFunc }) => {
  const isPc = useMedia().isPc;
  return (
    <InputCompStyled isPc={`${isPc}`}>
      <p>{children}</p>
      <input />
    </InputCompStyled>
  );
};
export default InputComp;
