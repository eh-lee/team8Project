import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../../util/getCookie";

const NewbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isFirst = getCookie("hoonsoo_isFirst");
    if (!isFirst) {
      nav("/onboarding");
    }
  }, []);
  return;
};

export default NewbieGuard;
