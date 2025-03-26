import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data/recipesData";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

  // 🔥 Scroll to Top when the recipe page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="recipe-detail">
      {/* Hero Section */}
      <div
        className="recipe-header"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <h1>{recipe.title}</h1>
      </div>

      {/* Recipe Info */}
      <div className="recipe-info">
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Time:</strong> {recipe.time}</p>
      </div>

      {/* Two-Column Layout */}
      <div className="recipe-content">
        <div className="recipe-columns">
          {/* Ingredients Section */}
          <div className="recipe-ingredients">
            <h2>🥩 Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Method Section */}
          <div className="recipe-method">
            <h2>👨‍🍳 Method</h2>
            <ol>
              {recipe.method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Back to Recipes Button */}
      <div className="back-button">
        <Link to="/recipes">⬅ Back to Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
