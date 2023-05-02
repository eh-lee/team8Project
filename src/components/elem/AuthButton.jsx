import React from "react";
import * as St from "./AuthButton.style"

export default function Button({
  borderColor,
  backgroundColor,
  text,
  onClick,
}) {
  return (
    <St.AuthButton
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {text}
    </St.AuthButton>
  );
};