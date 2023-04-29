import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../api/cookies";

const OldbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isNewbie = cookies.get("isNewbie");
    if (isNewbie) {
      nav("/");
    }
  }, []);
  return;
};

export default OldbieGuard;
