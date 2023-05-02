import styled from "styled-components";

export const Input = styled.input`
  border-radius: 0.5rem;
  height: 4vh;
  width: 30vh;
  padding: 0.5vh 1.5vh;
  margin: 1vh 0;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }
`;
