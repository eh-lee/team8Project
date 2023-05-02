import styled from "styled-components";
import { ReactComponent as BackIcon } from "../../assets/icons/common/back.svg";

const Header = styled.header`
background-color: #3a3a59;
position: fixed;
width: 100%;
min-width: 200px;
max-width: 400px;
height: 48px;
z-index: 1;
border-bottom: 0.1rem solid rgba(90, 81, 81, 0.617);
`;

const HeaderCont = styled.div`
display: flex;
height: 48px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 7.5%;
`;

const BtnBox = styled.div`
height: 24px;
width: 24px;
display: flex;
align-items: center;
justify-content: center;
path {
  stroke: white;
}
&:hover {
  cursor: pointer;
}
`;

const Title = styled.div`
letter-spacing: 0.0125em;
height: 24px;
display: flex;
align-items: center;
font-size: 18px;
color: white;
`;

const FooBtn = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 24px;
width: 24px;
color: rgb(180, 180, 180);
font-size: 16px;

&:hover {
  cursor: pointer;
  color: rgb(70, 70, 70);
}
`;

export { Header, HeaderCont, BtnBox, Title, FooBtn, BackIcon }