import React from "react";
import chefsImage1 from "../assets/restaurant chef B.jpg";
import chefsImage2 from "../assets/Mario and Adrian A.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-right">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>
          Mario and Adrian have been close friends for years, sharing a deep
          passion for Mediterranean cuisine. Working side by side in the
          kitchen, they blend creativity and tradition, crafting dishes that
          reflect their friendship, teamwork, and love for authentic, flavourful
          food.
        </p>
      </div>
      <div className="about-left">
        <img className="chefsImage1" src={chefsImage1} alt="Chefs" />
        <img className="chefsImage2" src={chefsImage2} alt="Chefs" />
      </div>
    </section>
  );
}
