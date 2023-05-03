import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../../../api/axios";

const TotalBoardFetch = ({ prevCategory, category, setData, page }) => {
  const location = useLocation();

  // 저녁 먹고->
  // 만약에 헤더에서 메인카테고리를 클릭했을 때, setMaincategory로 maincategory의 state를 관리해 주면서 parent에 한 번만 올려 (클릭했을 때 isActive도 실행하면서)
  // Board > BoardHeader에 있다(setMainCategory)
  // 그다음에 보드에서 TotalBoardFetch({setMainCategory})하면 되는 거 어닐까?
  // 그러면 location.pathname(boardheader.jsx && totalboardfetch.jsx) 필요 없고, 한 페이지로 보드 관리 가능

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

export default TotalBoardFetch;
