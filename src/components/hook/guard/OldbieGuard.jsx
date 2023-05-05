import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../../util/getCookie";

const OldbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isNewbie = getCookie("isNewbie");
    // const isNewbie = document.cookie("isNewbie");
    if (isNewbie) {
      nav("/");
    }
  }, []);
  return;
};

export default OldbieGuard;
