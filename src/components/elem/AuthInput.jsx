import React from "react";
import * as St from "./AuthInput.style"

const AuthInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <St.Input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
