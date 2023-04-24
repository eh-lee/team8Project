import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const A = () => {
  const [value, setValue] = useState("123");
  const navi = useNavigate();

  const buttonClickHandler = () => {
    localStorage.setItem("value_from_A", value);
    navi("/B");
  };
  return (
    <div>
      현재 value : {value}
      <button onClick={buttonClickHandler}> B로 넘어가기 </button>
    </div>
  );
};

export default A;
