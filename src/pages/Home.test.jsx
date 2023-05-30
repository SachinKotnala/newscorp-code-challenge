import "../jest.setup.js";

import { QueryClient, QueryClientProvider } from "react-query";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";
import {formatDate} from "../utils/formatDate"
import newsList from "../__test__/mocks/newsList.json"

const renderTest = async () => {
  const getQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          retryDelay: 0,
        },
      },
    });

  await render(
    <QueryClientProvider client={getQueryClient()}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe("Home", () => {
  it("should display the news articles", async () => {
    renderTest();
    screen.getByText(/Introducing News Corp News, your go-to source for the latest and most comprehensive news coverage from around the globe./);
    await waitFor(() => screen.getByText("Loading..."));
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    newsList.results.forEach(async (news) => {
        console.log(formatDate(news.date.live));
        screen.getByText(formatDate(news.date.live));
        
    });
  });
});
