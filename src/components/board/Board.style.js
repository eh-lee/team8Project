import styled from "styled-components";

const Header = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  padding-top: 0.75rem;
  width: 100%;
  max-width: 400px;
  font-size: 1.25rem;
  color: rgb(70, 70, 70);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const Main = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export { Header, Wrap, Main }