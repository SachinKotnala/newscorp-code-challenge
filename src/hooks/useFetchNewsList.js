import fetchList from "../fakeApi/fetchList";
import { useQuery } from "react-query";

const useFetchNewsList = (currentPage, pageSize) => {
  return useQuery(["news-list", currentPage, pageSize], async () => {
    return await fetchList(currentPage, pageSize);
  });
};

export default useFetchNewsList;
