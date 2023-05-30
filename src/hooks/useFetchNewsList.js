import fetchList from "../fakeApi/fetchList";
import { useQuery } from "react-query";

const useFetchNewsList = (currentPage, pageSize) => {
    try {
      return useQuery(["news-list", currentPage, pageSize], async () => {
        return await fetchList(currentPage, pageSize);
      });
    } catch (error) {
      // Handle the error
      console.error("Error fetching news list:", error);
      throw error; // Optionally rethrow the error
    }
  };

export default useFetchNewsList;
