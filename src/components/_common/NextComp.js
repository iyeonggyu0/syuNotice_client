import styled from "styled-components";

export const NextCompMainStyle = styled.div`
  width: 70vw;
  height: 60px;
  max-width: 300px;
  background-color: #474a50;
  color: white;
  font-size: 1.3rem;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background-color: rgb(90, 92, 96);
  }
`;

const NextComp = ({ children }) => {
  return <NextCompMainStyle className="flexCenter">{children}</NextCompMainStyle>;
};
export default NextComp;
