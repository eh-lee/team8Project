import styled, { css } from "styled-components";

const Cont = styled.div`
margin: 0 auto;
width: 400px;
`;

const Wrap = styled.ul`
margin-top: 15px;
width: 400px;
height: 168px;
`;

const Menu = styled.li`
width: 100%;
height: 56px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #e1e2e4;
cursor: pointer;
`;

const Sub = styled.div`
margin-left: 24px;
${({ isLogout }) =>
    isLogout &&
    css`
    /* color: #ef3f61; */
    color: rgb(255, 10, 10);
  `};
`;

const Icon = styled.img`
width: 6px;
height: 12px;
margin-right: 24px;
`;

export { Icon, Sub, Menu, Cont, Wrap }