import React from "react";
import SearchForm from "../../components/form/SearchForm";
import SearchHeader from "../../components/header/SearchHeader";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <>
      <Helmet>
        <title>훈수 — 검색</title>
      </Helmet>
      <MobileLayout>
        <SearchHeader />
        <SearchForm />
      </MobileLayout>
    </>
  );
};

export default Search;
