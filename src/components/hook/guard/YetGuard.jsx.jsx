import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const YetGuard = () => {
  const navi = useNavigate();

  useEffect(() => {
    alert("구현 중인 기능입니다.");
    navi(-1);
  }, []);

  return;
};

export default YetGuard;
