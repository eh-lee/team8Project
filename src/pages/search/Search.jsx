import React, { useEffect } from "react";
import SearchForm from "../../components/form/SearchForm";
import SearchHeader from "../../components/header/SearchHeader";
import MobileLayout from "../../layout/MobileLayout";
import styled from "styled-components";

const Search = () => {
  useEffect(() => {
    document.title = "훈수 - 검색";
  }, []);

  return (
    <>
      <MobileLayout>
        <ColoredBackGround>
          <SearchHeader />
          <SearchForm />
        </ColoredBackGround>
      </MobileLayout>
    </>
  );
};

export default Search;

const ColoredBackGround = styled.div`
  background: #F2F2F7;
  width: 100%;
  height: 100%;
`