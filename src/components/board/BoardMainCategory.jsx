import React, { useState } from "react";
import * as St from "./BoardMainCategory.style";

const BoardMainCategory = ({ parentFunction }) => {
  const [maincategory, setMaincategory] = useState("전체");

  const changeMainCategory = (e) => {
    setMaincategory(e);
  };
  parentFunction(maincategory);

  const [activeTab, setActiveTab] = useState("전체");

  return (
    <St.Around>
      <St.MainCategory
        isActive={activeTab === "전체"}
        onClick={() => {
          changeMainCategory("전체");
          setActiveTab("전체");
        }}
      >
        전체
      </St.MainCategory>
      <St.MainCategory
        isActive={activeTab === "유머"}
        onClick={() => {
          changeMainCategory("유머");
          setActiveTab("유머");
        }}
      >
        유머
      </St.MainCategory>
      <St.MainCategory
        isActive={activeTab === "진지"}
        onClick={() => {
          changeMainCategory("진지");
          setActiveTab("진지");
        }}
      >
        진지
      </St.MainCategory>
    </St.Around>
  );
};

//     <St.Around>
//       <St.MainCategory
//         isActive=
//         onClick={() => changeMainCategory("전체")}
//       >
//         전체
//       </St.MainCategory>
//       <St.MainCategory
//         isActive=
//         onClick={() => changeMainCategory("유머")}
//       >
//         유머
//       </St.MainCategory>
//       <St.MainCategory
//         isActive=
//         onClick={() => changeMainCategory("진지")}
//       >
//         진지
//       </St.MainCategory>
//     </St.Around>
//   );
// };

export default BoardMainCategory;
