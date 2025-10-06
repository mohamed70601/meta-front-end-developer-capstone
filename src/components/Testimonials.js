import React from "react";
import ratings from "../ratings";
import restaurantBg from "../assets/restaurant.jpg";

export default function Testimonials() {
  return (
    <section
      className="testimonial-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restaurantBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Testimonials</h2>
      <div className="ratings">
        {ratings.map((rating) => (
          <div className="rating-card" key={rating.name}>
            <span>{rating.rating}</span>
            <div className="rating-img-name">
              <img
                className="rating-img"
                src={rating.picture}
                alt={rating.name}
              />
              <span>{rating.name}</span>
            </div>
            <p className="rating-comment">{rating.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
