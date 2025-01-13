import styled from "styled-components";
import { useMedia } from "../../hooks/useMedia";

const ToggleCompStyl = styled.div`
  width: 70vw;
  height: ${(props) => (props.isPc ? "55px" : "50px")};
  max-width: 300px;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
  box-shadow: inset 0px 0px ${(props) => (props.toggle === "true" ? "5px #6ba2ff" : "3px rgba(0, 0, 0, 0.25)")};
  border-radius: ${(props) => (props.isPc ? "16px" : "8px")};
  color: #474a50;

  & > span {
    margin-left: 25px;
  }
`;

const ToggleComp = ({ children, toggle }) => {
  const isPc = useMedia().isPc;
  return (
    <ToggleCompStyl isPc={isPc} toggle={`${toggle}`} className="flexHeightCenter">
      <span>{children}</span>
    </ToggleCompStyl>
  );
};
export default ToggleComp;
