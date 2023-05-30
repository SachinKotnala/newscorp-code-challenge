import { Col, Pagination, Row } from "antd";

import ErrorMessage from "../components/shared/ErrorMessage";
import LoadingMessage from "../components/shared/LoadingMessage";
import NewsTile from "./NewsTile";
import useFetchNewsList from "../hooks/useFetchNewsList";
import { useState } from "react";

const NewsList = () => {
  const pageSize = 12; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data, error, refetch } = useFetchNewsList(
    currentPage,
    pageSize
  );
  // Handle page change event
  const handlePageChange = (page) => {
    console.log("Page changed:", page);
    //react query will automatically refetch when current page is changed
    setCurrentPage(page);
  };
  if (isLoading) {
    return <LoadingMessage />;
  }

  if (isError) {
    return (
      <ErrorMessage error={`News could not be retrieved: ${error.message}`} />
    );
  }
  // if loading & error are passed - data will be available
  if (!data) throw new Error("we should not reach this");

  return (
    <Row gutter={16} style={{ marginTop: "50px" }}>
      {data.result.map((news) => {
        const { date, headline, related, standfirst } = news;
        const thumbnailImages = related.thumbnail.default;
        const firstImageKey = thumbnailImages[0];
        const image = news.references[firstImageKey].link.media;
        const link = news.link.canonical;

        return (
          <Col xs={24} sm={12} md={8} style={{ marginTop: "50px" }} key={news.id}>
            <NewsTile
              key={news.id}
              date={date}
              headline={headline.default}
              image={image}
              standfirst={standfirst.default}
              link={link}
            />
          </Col>
        );
      })}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" ,width:"100%"}}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.totalLength}
          onChange={handlePageChange}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} articles`
          }
        />
      </div>
    </Row>
  );
};

export default NewsList;
