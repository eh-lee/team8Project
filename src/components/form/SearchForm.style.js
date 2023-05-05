import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/common/search.svg";

const Row = styled.div`
display: flex;
flex-direction: row;
`;

const RightBox = styled.div`
z-index: 1;
position: absolute;
right: 70px;
display: flex;
align-items: center;
height: 40px;
padding-right: 10px;
`;
const LeftBox = styled.div`
z-index: 1;
position: absolute;
display: flex;
align-items: center;
height: 40px;
padding-left: 10px;
`;

const Input = styled.input`
border: none;
border-radius: 10px;
padding: 0 30px 0 50px;
/* margin: 0 40px; */
width: 260px;
height: 40px;
background: #f2f2f7;
`;


const Cancel = styled.img`
/* width: 8px; */
/* height: 16px; */
margin-right: 4%;
color: rgb(180, 180, 180);
font-size: 0.9rem;
&:hover {
  cursor: pointer;
  color: rgb(70, 70, 70);
}
`;

const Search = styled(SearchIcon)`
font-size: 0.9rem;
path:nth-child(1) {
  stroke: #89899b;
}
&:hover {
  color: rgb(70, 70, 70);
}
`;

const Wrap = styled.div`
/* border: 1px solid green; */
position: fixed;
top: 49px;
background-color: white;
max-width: 400px;
min-height: 30px;
height: 64px;
border-bottom: 0.1rem solid rgba(180, 180, 180, 0.5);

display: flex;
flex-direction: flex-start;
align-items: center;
position: fixed;
bottom: 0;
z-index: 1;
`;

const Form = styled.form`
width: 100vw;
display: flex;
margin: 0 7.5%;
align-items: center;
justify-content: space-between;
`;

const InputBtn = styled.button`
border: none;
background-color: transparent;
color: #2d2d2d;
width: 32px;
height: 24px;
font-weight: 400;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
padding: 0;

cursor: pointer;
&:hover {
  color: #3a3a59;
}
`;

export { Wrap, Form, LeftBox, Row, RightBox, Input, InputBtn, Cancel, Search }