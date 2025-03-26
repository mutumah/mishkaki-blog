import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Mishkaki: Where Fire Meets Flavor</h1>
        <p>🔥 Exploring the World of Barbecue, One Grill at a Time 🍖</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Culinary Journey</h2>
          <p>
            Born from a deep passion for grilling and a family tradition of outdoor cooking, 
            Mishkaki Blog is more than just a recipe site—it's a celebration of barbecue culture. 
            Our founder, inspired by generations of family gatherings around the grill, 
            decided to share the art of creating mouthwatering dishes that bring people together.
          </p>
          <h2>Beyond Just Cooking</h2>
          <p>
            We believe barbecue is an experience, not just a cooking method. From traditional 
            techniques to innovative global flavors, we're committed to helping you transform 
            your backyard grill into a canvas of culinary creativity. Whether you're perfecting 
            a classic steak or experimenting with international marinades, Mishkaki is your 
            trusted companion on this flavorful journey.
          </p>
        </div>
        <div className="about-image">
          <img 
            src={aboutImage} 
            alt="Mishkaki Blog Founder Grilling Barbecue" 
            className="about-image-hover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;