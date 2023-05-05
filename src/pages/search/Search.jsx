import React, { useEffect } from "react";
import SearchForm from "../../components/form/SearchForm";
import SearchHeader from "../../components/header/SearchHeader";
import MobileLayout from "../../layout/MobileLayout";

const Search = () => {
  useEffect(() => {
    document.title = "훈수 - 검색";
  }, []);

  return (
    <>
      <MobileLayout>
        <SearchHeader />
        <SearchForm />
      </MobileLayout>
    </>
  );
};

export default Search;
