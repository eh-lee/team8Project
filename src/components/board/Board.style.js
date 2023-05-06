import styled from "styled-components";

const Header = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(70, 70, 70);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const Main = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E1E2E4;
`;

export { Header, Wrap, Main }