// import reactDom from "react-dom";

// const ModalPortal = ({ children }) => {
//   const el = document.getElementById("modal");
//   return reactDom.createPortal(children, el);
// };

// export default ModalPortal;

//Portal에 mobile layout 먹히기가 안 됨.. 나중에 다시 트라이

// =========== try (failed) ================

// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";

// const ModalPortal = ({ children }) => {
//   const el = document.getElementById("modal");
//   return ReactDOM.createPortal(
//     <StMobileLayout>
// {children}
//     </StMobileLayout>,
//     el
//   );
// };

// const StMobileLayout = styled.div`
// (...)
// `;

// export default ModalPortal;
