import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrueGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      alert("먼저 로그아웃을 해 주세요.");
      navigate("/");
    }
  }, []);
  return;
};

export default TrueGuard;
