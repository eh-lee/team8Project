import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../api/cookies";

const NewbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isNewbie = cookies.get("isNewbie");
    if (!isNewbie) {
      nav("/onboarding");
    }
  }, []);
  return;
};

export default NewbieGuard;
