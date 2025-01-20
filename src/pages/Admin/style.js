import styled from "styled-components";

export const AdminPageMainStyle = styled.section`
  width: 70vw;
  max-width: 1080px;
  padding-top: 100px;
  margin: 0 auto;

  & > h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  & > div:first-child {
    border-top: 1px solid lightgray;
  }

  & > div {
    width: 100%;
    padding: 5%;
    border-bottom: 1px solid lightgray;
  }

  & > div > div {
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: 30px 0;
  }

  & p span {
    font-size: 0.8rem;
    color: rgb(82, 87, 145);
    cursor: pointer;
    padding: 5px 0;
  }
`;
