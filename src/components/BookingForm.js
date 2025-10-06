import React, { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section className="booking-form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose a date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose time:</label>
              <select
                name=""
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a time:</option>
                {props.availableTimes.availableTimes.map((availableTime) => {
                  return <option key={availableTime}>{availableTime}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of guests:</label>
              <input
                id="book-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => {
                  setOccasion(e.target.value);
                }}
              >
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                type="submit"
                aria-label="On click"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}
