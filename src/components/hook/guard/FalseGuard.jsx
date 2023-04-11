import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../../src/api/cookies";

const FalseGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("access_token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);
  return;
};

export default FalseGuard;
