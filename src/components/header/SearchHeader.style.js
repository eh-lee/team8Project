import styled from "styled-components";

const MarginRight = styled.div`
  margin-right: 7.5%;
  width: 8px;
  height: 16px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const BackIcon = styled.img`
  width: 8px;
  height: 16px;
  margin-left: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const Wrap = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E1E2E4;
  height: 64px;
`;

const Flex = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;


export { Wrap, Cont, Flex, MarginRight, BackIcon, Title }