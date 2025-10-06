import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
});

test("renders the booking form labels correctly", () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={{ availableTimes: ["17:00", "18:00"] }}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
    />
  );

  expect(screen.getByLabelText(/Choose a date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test("submits the form when all fields are filled", () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={{ availableTimes: ["17:00", "18:00"] }}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText(/Choose a date/i), {
    target: { value: "2025-10-10" },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /Make Your Reservation/i })
  );

  expect(mockSubmit).toHaveBeenCalled();
});
