import styled from "styled-components";
import noSearch from "../../assets/imgs/detail/noSearch.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/common/search.svg";

const Wrap = styled.div`
position: fixed;
top: 64px;
background-color: white;
border-bottom: 1px solid #F4F4F5;
max-width: 400px;
min-height: 30px;
height: 64px;

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

const Row = styled.div`
display: flex;
flex-direction: row;
`;

const LeftBox = styled.div`
z-index: 1;
position: absolute;
display: flex;
align-items: center;
height: 40px;
padding-left: 10px;
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

const Input = styled.input`
border: none;
border-radius: 10px;
padding: 0 30px 0 50px;
width: 260px;
height: 40px;
background: #f2f2f7;
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

const Cancel = styled.img`
margin-right: 4%;
color: rgb(180, 180, 180);
font-size: 0.9rem;
&:hover {
  cursor: pointer;
  color: rgb(70, 70, 70);
}
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

const SearchCardList = styled.div`
  margin-top: 128px;
  width: 400px;
  min-height: 300px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: transparent;
`;

const NoSearchCont = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoSearchImg = styled.img`
  width: 94.49px;
  height: 81.33px;
  margin-bottom: 16px;
`;

const NoSearchText = styled.span`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;


export { Wrap, Form, LeftBox, Row, RightBox, Input, InputBtn, Cancel, Search, NoSearchCont, NoSearchImg, SearchCardList, NoSearchText }