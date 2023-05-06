import { useEffect, useState } from "react";

const InfiniteScroll = ({ postCardContRef, parentFunction }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const postCardCont = postCardContRef.current;

      if (!postCardCont) {
        return;
      }

      const isBottom =
        postCardCont.scrollHeight - postCardCont.scrollTop ===
        postCardCont.clientHeight;

      if (isBottom) {
        setPage((prevPage) => prevPage + 1);
        // console.log("sdfsdfsdfdsfdsfsdf", setPage);
      }
      return () => {
        parentFunction(page);
        console.log("인피니티스크롤이 올리는 페이지=========>", page);
      };
    };

    // console.log("INFI PAGE==========>", page);
    postCardContRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      postCardContRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [postCardContRef]);

  return;
};

export default InfiniteScroll;
