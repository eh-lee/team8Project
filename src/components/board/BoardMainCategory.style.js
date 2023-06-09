import styled from "styled-components";

const Around = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
`;

const MainCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;

  color: ${(props) =>
    props.isActive ? "rgb(70, 70, 70)" : "rgb(180, 180, 180)"};
  border-bottom: ${(props) =>
    props.isActive
      ? "0.2rem solid rgb(70, 70, 70)"
      : "0.1rem solid rgb(180, 180, 180)"};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: rgb(70, 70, 70);
    border-bottom: 0.2rem solid rgb(70, 70, 70);
  }
`;

export { Around, MainCategory }