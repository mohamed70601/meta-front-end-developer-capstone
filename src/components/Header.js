import React from "react";
import { Link } from "react-router-dom";
import restaurantfood from "../assets/restauranfood.jpg";

export default function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button type="button" aria-label="Reserve a Table">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={restaurantfood} alt="banner" />
        </div>
      </section>
    </header>
  );
}
