import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Little Lemon App", () => {
  it("renders the restaurant name", () => {
    render(<App />);

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });

  it("renders the reservation form with default values", () => {
    render(<App />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveValue(2);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveValue("Birthday");
  });

  it("renders all reservation form fields", () => {
    render(<App />);

    expect(
      screen.getByLabelText(/choose date/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/choose time/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/number of guests/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/occasion/i)
    ).toBeInTheDocument();
  });
});