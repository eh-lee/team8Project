import React from "react";
import styled from "styled-components";

export default function Button({
  borderColor,
  backgroundColor,
  text,
  onClick,
}) {
  return (
    <AuthButton
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {text}
    </AuthButton>
  );
}

const AuthButton = styled.button`
  border: 0.1rem solid black ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.borderColor};
  border-radius: 0.5rem;
  padding: 1vh;
  height: 4vh;
  width: 20vh;
  font-size: 1rem;

  &:hover {
    border: 0.1rem solid ${(props) => props.borderColor};
    background-color: rgba(170, 170, 170, 0.1);
    cursor: pointer;
  }
`;
