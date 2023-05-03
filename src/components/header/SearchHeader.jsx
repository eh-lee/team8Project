import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "../../assets/icons/common/vector.png";
import * as St from "./SearchHeader.style";

const SearchHeader = () => {
  const nav = useNavigate();

  return (
    <St.Wrap>
      <St.Cont>
        <St.BackIcon src={vector} onClick={() => nav(-1)} />
        <St.Flex>
          <St.Title>전체 검색</St.Title>
        </St.Flex>
        <St.MarginRight />
      </St.Cont>
    </St.Wrap>
  );
};

export default SearchHeader;
