import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

import AppRouter from "./router/AppRouter";
import React from "react";
import ReactDOM from "react-dom/client";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      cacheTime: 0,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      {" "}
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
);
