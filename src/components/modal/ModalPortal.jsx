import reactDom from "react-dom";
// import { css } from "styled-components";

const ModalPortal = ({ children }) => {
  // <div className="Modal">{ children }</div>
  const el = document.getElementById("modal");
  return reactDom.createPortal(children, el);
};

// .Modal {
//   margin: 1rem;
// }

export default ModalPortal;
