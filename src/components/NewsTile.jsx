import { Card } from "antd";
import { formatDate } from "../utils/formatDate";

const { Meta } = Card;

const NewsTile = ({ id, date, headline, image, standfirst, link }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 300, height: 400, marginBottom: 10 }}
        cover={
          <img
            src={image}
            alt=""
            width={100}
            height={200}
            // width={image.width}
            // height={image.height}
          />
        }
        // URL are of different domain,so to keep route simple for now I am opening it in a new tab
        onClick={() => window.open(link, "_blank")} 
      >
      <Meta
            title={<div data-testid='test-headline' style={{ fontSize: '16px', whiteSpace: 'normal' }}>{headline}</div>}
            description={
                <div data-testid='test-description'>
                  Published on: {formatDate(date.live)}
                </div>
              }
            style={{ fontSize: '12px' }}
          />

        <p
          dangerouslySetInnerHTML={{
            __html: `${
              standfirst.length > 120
                ? `${standfirst.slice(0, 130)}...`
                : standfirst
            }`,
          }}
        />
      </Card>
    </>
  );
};

export default NewsTile;
