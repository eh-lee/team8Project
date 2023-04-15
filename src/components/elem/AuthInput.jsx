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
  /* border-bottom: 0.1rem solid #333333; */
  height: 4vh;
  width: 30vh;
  /* outline: none; */
  padding: 0.5vh 1.5vh;
  margin: 1vh 0;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    border-bottom: 0.1rem solid #c9c9c9;
    background-color: rgba(45, 32, 167, 0.1);
  }
`;

export default AuthInput;
