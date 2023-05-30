import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorMessage from "../components/shared/ErrorMessage";
import Header from "../components/Header";
import Home from "../pages/Home";
import LoadingMessage from "../components/shared/LoadingMessage";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingMessage />} />
        <Route path="/error" element={<ErrorMessage error="sample error" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
