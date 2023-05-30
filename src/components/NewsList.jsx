import { Col, Row } from "antd";

import ErrorMessage from "../components/shared/ErrorMessage";
import LoadingMessage from "../components/shared/LoadingMessage";
import NewsTile from "./NewsTile";
import {newsData} from "../mockData/news"

const NewsList = () => {
    

console.log(newsData[0]);
  return (
    <Row gutter={16} style={{ marginTop: "50px" }}>
      {newsData.results.map((news) => {
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
    </Row>
  );
};

export default NewsList;
