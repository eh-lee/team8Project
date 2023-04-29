import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../api/cookies";

const NewbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isFirst = cookies.get("isFirst");
    if (!isFirst) {
      nav("/onboarding");
    }
  }, []);
  return;
};

export default NewbieGuard;
