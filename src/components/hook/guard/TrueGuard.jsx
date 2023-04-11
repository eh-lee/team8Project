import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../../src/api/cookies";

const TrueGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("access_token");
    if (token) {
      alert("먼저 로그아웃을 해 주세요.");
      navigate("/");
    }
  }, []);
  return;
};

export default TrueGuard;
