import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import heroImage from "../assets/hero-bg.jpg";
import aboutImage from "../assets/about-image.jpg";

const Home = () => {
  // Featured recipes data with placeholder images
  const featuredRecipes = [
    {
      id: 1,
      title: "Perfect Grilled Steak",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description: "Learn the secret to perfectly grilled steaks every time.",
      difficulty: "Medium",
      time: "25 mins",
    },
    {
      id: 2,
      title: "Smoky BBQ Ribs",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJpYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description: "Fall-off-the-bone tender ribs with our signature smoky sauce.",
      difficulty: "Advanced",
      time: "3 hours",
    },
    {
      id: 3,
      title: "Spicy Grilled Chicken",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description: "Juicy chicken with a kick that will spice up your barbecue.",
      difficulty: "Easy",
      time: "40 mins",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Michael J.",
      comment: "Your steak recipe changed my grilling game forever! My family can't get enough of it.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah T.",
      comment: "As a beginner, your guides made BBQing so much less intimidating. Thank you!",
      rating: 5,
    },
    {
      id: 3,
      name: "David W.",
      comment: "The spice rub recipe is incredible. Everyone asks for my secret now!",
      rating: 4,
    },
  ];

  // Background image URLs instead of imports
  const grillingTipsBackground = "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmJxfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80";
  const testimonialsBackground = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmJxfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80";
  return (
    <div className="home">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Mishkaki Blog</h1>
          <p>🔥 The ultimate destination for barbecue & steak lovers! 🍖</p>
          <div className="hero-buttons">
            <Link to="/recipes" className="explore-btn primary-btn">
              Explore Recipes
            </Link>
            <Link to="/tips" className="explore-btn secondary-btn">
            Get Pro Tips
           </Link>
          </div>
        </div>
      </div>

      {/* Featured Recipes */}
      <section className="featured-recipes section-padding" id="featured">
        <div className="section-header">
          <h2>🔥 Featured Recipes</h2>
          <p>Try our most popular grilling recipes that our readers love</p>
        </div>
        
        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-difficulty">{recipe.difficulty}</div>
              </div>
              <div className="recipe-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-time">⏱️ {recipe.time}</span>
                  <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                    View Recipe →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <Link to="/recipes" className="view-more-btn">
            View All Recipes
          </Link>
        </div>
      </section>

      {/* Grilling Tips Banner */}
      <section 
        className="grilling-tips-banner" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${grillingTipsBackground})` }}
      >
        <div className="tips-content">
          <h2>Master the Flame</h2>
          <p>Discover our exclusive grilling techniques and transform your barbecue skills</p>
          <Link to="/tips" className="tips-btn">
            Get Pro Tips
          </Link>
        </div>
      </section>
      
      {/* About Author */}
      <section className="about-author section-padding" id="about">
        <div className="author-container">
          <div className="author-image">
            <img src={aboutImage}  alt="Blog Author" />
          </div>
          <div className="author-content">
            <h2>Meet the Grillmaster</h2>
            <h3>Cliff Mishkaki</h3>
            <p>
              With over 15 years of experience in professional and backyard grilling, 
              I've developed techniques and recipes that bring out the best flavors in 
              every cut of meat. My passion is helping others discover the joy of perfect 
              barbecue, one grill mark at a time.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/mishkakiblog" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://youtube.com/mishkakiblog" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://twitter.com/mishkakiblog" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="testimonials section-padding" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${testimonialsBackground})` }}
        id="testimonials"
      >
        <div className="section-header light">
          <h2>❤️ Griller Reviews</h2>
          <p>What our community says about our recipes</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial-comment">"{testimonial.comment}"</p>
              <div className="testimonial-author">— {testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;