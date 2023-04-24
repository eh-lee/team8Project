import React, { useState } from "react";
import { useEffect } from "react";

const B = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(parseInt(localStorage.getItem("value_from_A")));
    value !== 0 && localStorage.removeItem("value_from_A");
  }, [value]);

  return <div>넘어온 값은 : {value}</div>;
};

export default B;
