import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../../util/getCookie";

const NewbieGuard = () => {
  const nav = useNavigate();

  useEffect(() => {
    const isFirst = getCookie("isFirst");
    console.log(getCookie());
    console.log(getCookie("isFirst"));
    console.log("isFirst", isFirst);
    // const isFirst = document.cookie("isFirst");
    if (!isFirst) {
      nav("/onboarding");
    }
  }, []);
  return;
};

export default NewbieGuard;
