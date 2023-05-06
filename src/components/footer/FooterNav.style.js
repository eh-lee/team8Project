import styled from "styled-components";
import {ReactComponent as HomeIcon} from "../../assets/icons/common/home.svg"
import {ReactComponent as BoardIcon} from "../../assets/icons/common/board.svg"
import {ReactComponent as BattleIcon} from "../../assets/icons/common/battle.svg"
import {ReactComponent as WriteIcon} from "../../assets/icons/common/write.svg"


const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  color: #BDBDC9;
`;

const FooterUl = styled.ul`
  display: flex;
  width: 100%;
  gap: 0.1rem;
`;

const FooterBox = styled.div`
  display: flex;
  width: 25%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #3A3A59;
    cursor: pointer;
    path {
          stroke: #3A3A59;
          fill: ${props => props.fill ? '#3A3A59' : 'none'};
        }
  }
`;



const FooterBoxColumn = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;


const FooterNavIcon = styled.svg.attrs(props => ({
  children: props.icon === 'Home' ? <HomeIcon /> 
    : props.icon === 'Board' ? <BoardIcon /> 
    : props.icon === 'Battle' ? <BattleIcon />
    : <WriteIcon />
}))`
  width: 24px;
  height: 24px;

`;

export {
    Column,
    Nav,
    FooterUl,
    FooterBox,
    FooterBoxColumn,
    FooterNavIcon,
    
}