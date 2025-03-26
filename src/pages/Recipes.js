import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Recipes.css";

// Constants
const CATEGORIES = ["All", "Steak", "Ribs", "Chicken", "Seafood", "Vegetables", "Sauces & Rubs"];
const DIFFICULTIES = ["All", "Easy", "Medium", "Advanced"];

// Sample data moved outside component to prevent recreation on each render
const SAMPLE_RECIPES = [
  {
    id: 1,
    title: "Perfect Grilled Steak",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3",
    category: "Steak",
    difficulty: "Medium",
    time: "25 mins",
    description: "Learn how to cook the perfect medium-rare ribeye steak with a flavorful crust and tender inside.",
    featured: true,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Smoked BBQ Beef Ribs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
    category: "Ribs",
    difficulty: "Advanced",
    time: "6 hours",
    description: "Low and slow smoked beef ribs with a homemade dry rub that will fall off the bone.",
    featured: true,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Grilled Spicy Chicken",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3",
    category: "Chicken",
    difficulty: "Easy",
    time: "40 mins",
    description: "Juicy chicken with a perfect blend of spices for a kick of heat.",
    featured: true,
    rating: 4.5,
  },
  {
    id: 13,
    title: "Cedar Plank Salmon",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3",
    category: "Seafood",
    difficulty: "Medium",
    time: "30 mins",
    description: "Salmon fillets grilled on cedar planks for a subtle smoky flavor.",
    featured: false,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Grilled Vegetable Medley",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3",
    category: "Vegetables",
    difficulty: "Easy",
    time: "20 mins",
    description: "A colorful mix of seasonal vegetables with herb infused olive oil.",
    featured: false,
    rating: 4.3,
  },
  {
    id: 6,
    title: "Texas-Style BBQ Sauce",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=60",
    category: "Sauces & Rubs",
    difficulty: "Easy",
    time: "25 mins",
    description: "Sweet and tangy homemade BBQ sauce with a hint of Texas smoke.",
    featured: false,
    rating: 4.6,
  },
  {
    id: 7,
    title: "Chimichurri Skirt Steak",
    image: "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-4.0.3",
    category: "Steak",
    difficulty: "Medium",
    time: "35 mins",
    description: "Tender skirt steak topped with fresh and zesty chimichurri sauce.",
    featured: false,
    rating: 4.8,
  },
  {
    id: 8,
    title: "Smoked Pork Ribs",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3",
    category: "Ribs",
    difficulty: "Advanced",
    time: "5 hours",
    description: "Classic 3-2-1 method for fall-off-the-bone tender pork ribs.",
    featured: false,
    rating: 4.9,
  },
  {
    id: 9,
    title: "Beer Can Chicken",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3",
    category: "Chicken",
    difficulty: "Medium",
    time: "1.5 hours",
    description: "Juicy whole chicken roasted over a can of beer for incredible flavor.",
    featured: false,
    rating: 4.4,
  },
  {
    id: 10,
    title: "Memphis Dry Rub",
    image: "https://www.thespruceeats.com/thmb/MnI09SfEvOxGCEVzQRwDSyNoDtk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/memphis-bbq-rub-335875-hero-01-7360fbe48b164cb09614e72d09a7e27c.jpg",
    category: "Sauces & Rubs",
    difficulty: "Easy",
    time: "10 mins",
    description: "Classic Memphis-style dry rub with the perfect balance of sweet and spicy.",
    featured: false,
    rating: 4.7,
  },
  {
    id: 11,
    title: "Grilled Shrimp Skewers",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
    category: "Seafood",
    difficulty: "Easy",
    time: "20 mins",
    description: "Succulent shrimp skewers with a garlic and herb marinade.",
    featured: false,
    rating: 4.6,
  },
  {
    id: 12,
    title: "Stuffed Bell Peppers",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3",
    category: "Vegetables",
    difficulty: "Medium",
    time: "45 mins",
    description: "Colorful bell peppers stuffed with rice, cheese, and grilled to perfection.",
    featured: false,
    rating: 4.5,
  },
];

// Custom hook for recipe filtering
const useRecipeFilter = (recipes) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDifficulty, setActiveDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    let result = [...recipes];
    
    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(recipe => recipe.category === activeCategory);
    }
    
    // Filter by difficulty
    if (activeDifficulty !== "All") {
      result = result.filter(recipe => recipe.difficulty === activeDifficulty);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [recipes, activeCategory, activeDifficulty, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("All");
    setActiveDifficulty("All");
    setSearchQuery("");
  };

  const areFiltersActive = activeCategory !== "All" || activeDifficulty !== "All" || searchQuery.trim() !== "";

  return {
    activeCategory,
    setActiveCategory,
    activeDifficulty,
    setActiveDifficulty,
    searchQuery,
    setSearchQuery,
    filteredRecipes,
    clearFilters,
    areFiltersActive
  };
};

// Rating Stars component
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  
  return (
    <div className="recipe-rating" aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}>
      {"★".repeat(fullStars)}
      {"☆".repeat(emptyStars)}
      <span>{rating.toFixed(1)}</span>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
};

// Recipe Card component
const RecipeCard = ({ recipe }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={`${recipe.title}`} />
        <div className="recipe-category">{recipe.category}</div>
      </div>
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <div className="recipe-details">
          <span className="recipe-difficulty">{recipe.difficulty}</span>
          <span className="recipe-time">⏱️ {recipe.time}</span>
        </div>
        <RatingStars rating={recipe.rating} />
        <Link to={`/recipe/${recipe.id}`} className="recipe-link" aria-label={`View recipe for ${recipe.title}`}>
          View Recipe →
        </Link>
      </div>
    </article>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

// Featured Recipe Card component
const FeaturedRecipeCard = ({ recipe }) => {
  return (
    <article className="featured-recipe-card">
      <div className="featured-recipe-image">
        <img src={recipe.image} alt={`${recipe.title}`} />
        <div className="featured-badge">Featured</div>
      </div>
      <div className="featured-recipe-content">
        <h3>{recipe.title}</h3>
        <RatingStars rating={recipe.rating} />
        <p>{recipe.description}</p>
        <div className="recipe-meta">
          <span className="recipe-difficulty">{recipe.difficulty}</span>
          <span className="recipe-time">⏱️ {recipe.time}</span>
        </div>
        <Link 
          to={`/recipe/${recipe.id}`} 
          className="view-recipe-btn"
          aria-label={`View full recipe for ${recipe.title}`}
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
};

FeaturedRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

// Search Bar component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes, ingredients..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search recipes"
      />
      {searchQuery && (
        <button 
          className="clear-search" 
          onClick={() => setSearchQuery("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};

// Filter Buttons component
const FilterButtons = ({ 
  options, 
  activeOption, 
  setActiveOption, 
  label 
}) => {
  return (
    <div className="filter-group">
      <span className="filter-label">{label}:</span>
      <div className="filter-options">
        {options.map(option => (
          <button
            key={option}
            className={`filter-btn ${activeOption === option ? 'active' : ''}`}
            onClick={() => setActiveOption(option)}
            aria-pressed={activeOption === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FilterButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOption: PropTypes.string.isRequired,
  setActiveOption: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

// Main Recipes component
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    activeCategory,
    setActiveCategory,
    activeDifficulty,
    setActiveDifficulty,
    searchQuery,
    setSearchQuery,
    filteredRecipes,
    clearFilters,
    areFiltersActive
  } = useRecipeFilter(recipes);

  // Fetch recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/recipes');
        // const data = await response.json();
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 800));
        setRecipes(SAMPLE_RECIPES);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        // Would handle error state here
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Get featured recipes
  const featuredRecipes = useMemo(() => {
    return recipes.filter(recipe => recipe.featured);
  }, [recipes]);

  // Show featured recipes only when no filters are applied
  const showFeatured = !areFiltersActive;

  return (
    <div className="recipes-page">
      {/* Hero Banner */}
      <div className="recipes-hero" role="banner">
        <div className="recipes-hero-content">
          <h1>Delicious Barbecue & Steak Recipes</h1>
          <p>Explore a variety of mouth-watering barbecue and steak recipes!</p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="recipes-controls">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="filters-container">
          <FilterButtons 
            options={CATEGORIES} 
            activeOption={activeCategory} 
            setActiveOption={setActiveCategory} 
            label="Category"
          />
          
          <FilterButtons 
            options={DIFFICULTIES} 
            activeOption={activeDifficulty} 
            setActiveOption={setActiveDifficulty} 
            label="Difficulty"
          />
          
          {areFiltersActive && (
            <button 
              className="clear-filters" 
              onClick={clearFilters}
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Featured Recipes Section */}
      {showFeatured && featuredRecipes.length > 0 && (
        <section className="featured-recipes-section">
          <h2>Featured Recipes</h2>
          <div className="featured-recipes-grid">
            {featuredRecipes.map(recipe => (
              <FeaturedRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      )}

      {/* All Recipes Section */}
      <section className="all-recipes-section">
        {/* Conditional heading based on filters */}
        <h2>
          {areFiltersActive
            ? "Filtered Recipes"
            : "All Recipes"}
        </h2>
        
        {/* Loading state */}
        {isLoading ? (
          <div className="loading-state" role="status">
            <div className="spinner" aria-hidden="true"></div>
            <p>Loading delicious recipes...</p>
          </div>
        ) : (
          <>
            {/* No results message */}
            {filteredRecipes.length === 0 && (
              <div className="no-results">
                <h3>No recipes found</h3>
                <p>
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button 
                  className="try-again-btn" 
                  onClick={clearFilters}
                  aria-label="Clear all filters and try again"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Results count */}
            {filteredRecipes.length > 0 && (
              <div className="results-count" aria-live="polite">
                Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </div>
            )}
            
            {/* Grid of recipes */}
            <div className="recipes-grid">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Recipes;