import React from "react";
import styled from "styled-components";

const AuthInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <StyledInput
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
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

export default AuthInput;
