import axios from "axios";
import React, { useState } from "react";
import cancel from "../../assets/icons/common/expand.png";
import * as St from "./SearchForm.style";
import { instance } from "../../api/axios";

const SearchForm = () => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  console.log("Search input=============>", input);

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // const response = await instance.get(`/search/?q=${input}`);
      const response = await axios.get(
        `http://3.35.19.8:3000/api/search/?q=${input}`
      );
      console.log("search==========>", response);
      console.log("search==========>", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const initValueHandler = () => {
    setInput("");
  };

  return (
    <St.Wrap>
      <St.Form>
        <St.Row>
          <St.LeftBox>
            <St.Search />
          </St.LeftBox>
          <St.Input
            required
            type="text"
            placeholder="검색어를 입력하세요."
            // value={newComment}
            onChange={(e) => inputHandler(e)}
            maxLength="20"
            value={input}
          />
          <St.RightBox>
            <St.Cancel src={cancel} onClick={() => initValueHandler()} />
          </St.RightBox>
        </St.Row>

        <St.InputBtn type="submit" onSubmit={(e) => searchSubmitHandler(e)}>
          검색
        </St.InputBtn>
      </St.Form>
    </St.Wrap>
  );
};

export default SearchForm;
