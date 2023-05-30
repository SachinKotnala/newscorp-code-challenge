import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound", () => {
  it("should display", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const textElement = screen.getByText("Page not found");
    expect(textElement).toBeInTheDocument();
  });
});
