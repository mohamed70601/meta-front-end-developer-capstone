import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  // --- Booking logic moved here ---
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185000;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() > 0.5) result.push(i + ":30");
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const initializeTimes = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) navigate("/confirmed");
  }

  // --- App layout & routes ---
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Menu />
              <Testimonials />
              <About />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
