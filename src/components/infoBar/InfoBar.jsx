import React from "react";

import onlineIcon from "../../assets/icons/test/onlineIcon.png";
import closeIcon from "../../assets/icons/test/closeIcon.png";

import "./InfoBar.css";

function InfoBar() {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>room</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;

// import React from "react";
// import styled from "styled-components";

// import "./InfoBar.css";

// function InfoBar() {
//   return (
//     <Foo>
//       <div>인포바</div>
//     </Foo>
//   );
// }

// export default InfoBar;

// const Foo = styled.div`
//   width: 400px;
//   margin: 0 auto;
//   /* border: 1px solid tomato; */
// `;
