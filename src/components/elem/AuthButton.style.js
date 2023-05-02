import styled from "styled-components";

const AuthButton = styled.button`
  border: none ${(props) => props.borderColor};
  background-color: #ef3f61 ${(props) => props.backgroundColor};
  color: white ${(props) => props.borderColor};
  border-radius: 0.5rem;
  padding: 1vh;
  height: 4.75vh;
  width: 33vh;
  font-size: 1rem;

  &:hover {
    border: 0.1rem solid ${(props) => props.borderColor};
    background-color: pink;
    cursor: pointer;
  }
`;

export { AuthButton };