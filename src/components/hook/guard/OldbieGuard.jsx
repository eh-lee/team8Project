import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../../util/getCookie";

const OldbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isNewbie = getCookie("hoonsoo_isNewbie");
    if (isNewbie) {
      nav("/");
    }
  }, []);
  return;
};

export default OldbieGuard;
