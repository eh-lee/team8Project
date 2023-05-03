import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../../../api/axios";

const BoardFetch = ({ prevCategory, category, setData, page }) => {
  const location = useLocation();

  console.log("fetch cat=========>", category);
  useEffect(() => {
    const maincategory =
      location.pathname === "/totalboard"
        ? "전체"
        : location.pathname === "/humourboard"
        ? "유머"
        : "진지";

    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/postCards?maincategory=${maincategory}&category=${category}&splitNumber=7&splitPageNumber=${page}`
        );
        if (prevCategory === category) {
          setData((prev) => [...prev, ...response.data.postCards]);
          if (response.data.postCards.length === 0) {
            alert("마지막 게시물입니다.");
          }
        } else {
          setData(response.data.postCards);
          if (response.data.postCards.length === 0) {
            alert(`${category} 게시물이 없습니다.`);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, page]);

  return;
};

export default BoardFetch;
