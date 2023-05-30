import axios from "axios";

const fetchList = async (currentPage, pageSize) => {

//   Usually if api supports pagination, then we would pass page and page size to api
//   However, in this case I am using alternate approach to implement pagination of data return by fake api.

//   const response = await axios.get(
//     `http://localhost:3030/results?page=${page}&pageSize=${pageSize}`
//   );
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const response = await axios.get(`http://localhost:3030/results`);
  const totalLength = response.data.length;
  const currentData = response.data.slice(startIndex, endIndex);
  const result = {
    totalLength: totalLength,
    result: currentData,
  };
  return result;
};

export default fetchList;
