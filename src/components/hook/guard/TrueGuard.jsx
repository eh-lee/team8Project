import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../../src/api/cookies";

const TrueGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("access_token");
    if (token) {
      navigate("/");
    }
  }, []);
  return;
};

export default TrueGuard;
