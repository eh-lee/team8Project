import styled from "styled-components";
import logo from "../../assets/icons/logo/kakaologinloadinglogo.png";

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2e2e47;
`;

const Logo = styled.div`
  background-size: cover;
  background-image: url(${logo});
  width: 92px;
  height: 66px;
`;

export { Bg, Logo }