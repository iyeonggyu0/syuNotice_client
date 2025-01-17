import styled from "styled-components";
import { useMedia } from "../../hooks/useMedia";

export const NextCompMainStyle = styled.div`
  width: 70vw;
  height: ${(props) => (props.isPc ? "55px" : "50px")};
  max-width: 300px;
  background-color: #474a50;
  color: white;
  font-size: 1.1rem;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(90, 92, 96);
  }
`;

const NextComp = ({ children }) => {
  const isPc = useMedia().isPc;
  return (
    <NextCompMainStyle isPc={`${isPc}`} className="flexCenter">
      {children}
    </NextCompMainStyle>
  );
};
export default NextComp;
