import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0 7.5%;
  color: rgb(70, 70, 70);
  `;

  const HeaderUl = styled.ul`
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

const HeaderLogo = styled.img`
  width: 47px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderBox = styled.div`
  gap: 16px;
  display: flex;
  width: 104px;
  height: 24px;
  text-align: center;
  justify-content: flex-end;
`;

const HeaderBoxItem = styled.div`
  width: 24px;
  height: 24px;
  color: white;
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;


export {
    Nav,
    HeaderUl,
    HeaderLogo,
    HeaderBox,
    HeaderBoxItem,
}