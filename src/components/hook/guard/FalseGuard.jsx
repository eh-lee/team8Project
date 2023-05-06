import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FalseGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("hoonsoo_access_token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);
  return;
};

export default FalseGuard;
