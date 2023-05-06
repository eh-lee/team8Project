import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/icons/common/back.svg";
import { ReactComponent as VerticalDots } from "../../assets/icons/common/verticaldots.svg";

const DotsIcon = styled(VerticalDots)`
  &:hover {
    cursor: pointer;
  }
`;

const BackIcon = styled(Back)`
  &:hover {
    cursor: pointer;
  }
`

const Header = styled.header`
  background-color: white;
  position: fixed;
  width: 100%;
  min-width: 200px;
  max-width: 400px;
  height: 64px;
  width: 400px;
  display: flex;
  align-items: center;
  z-index: 1;
  border-bottom: 0.1rem solid #E1E2E4;
`;

const Wrap = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5%;
`;

const BackBtn = styled.div`
  color: rgb(180, 180, 180);
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  letter-spacing: 0.0125em;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: rgb(70, 70, 70);
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: rgb(180, 180, 180);
  font-size: 16px;
`;

const ModalCont = styled.div`
  width: 164px;
  height: 80px;
`;

export { Header, Wrap, BackBtn, BackIcon, Category, MenuBtn, DotsIcon, ModalCont }