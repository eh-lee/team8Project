import styled, { css } from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import { ReactComponent as Edit } from "../../assets/icons/common/edit.svg";


const DetailMenuWrap = styled.ul`
  position: absolute;
  background-color: white;
  top: 9vh;
  left: 50vw;
  width: 164px;
  height: 80px;
  border-radius: 13px;
  font-size: 14px;
  box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const MenuButton = styled.ul`
  width: 164px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid #cccccc;
  ${({ delete: isDelete }) =>
    isDelete &&
    css`
      color: #eb5147;
      border-bottom: none;
    `}
`;

const ButtonText = styled.li``;

const IconEdit = styled(Edit)`
  width: 20px;
  height: 20px;
`;

const IconTrash = styled(Trash)`
  width: 20px;
  height: 20px;
  path:nth-child(1) {
    stroke: #eb5147;
  }
`;

export {
    DetailMenuWrap,
    MenuButton,
    ButtonText,
    IconEdit,
    IconTrash,
}