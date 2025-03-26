const recipesData = [
    {
      id: 1,
      title: "Perfect Grilled Steak",
      category: "Beef",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=500&q=60",
      description: "Learn the secret to perfectly grilled steaks every time. Tender, juicy, and full of smoky flavor!",
      difficulty: "Medium",
      time: "25 mins",
      ingredients: [
        "2 ribeye steaks (1-inch thick)",
        "2 tbsp olive oil",
        "1 tsp salt",
        "1 tsp black pepper",
        "1 tsp garlic powder",
        "1 tsp smoked paprika",
        "1 tbsp butter",
        "Fresh rosemary (optional)"
      ],
      method: [
        "Pat steaks dry with paper towels and let them rest at room temperature for 30 minutes.",
        "Brush steaks with olive oil and season with salt, pepper, garlic powder, and smoked paprika.",
        "Preheat grill to high heat (450-500°F).",
        "Place steaks on the grill and cook for 4-5 minutes per side for medium-rare.",
        "During the last minute, place a pat of butter and fresh rosemary on top of each steak.",
        "Remove steaks from the grill and let them rest for 5 minutes before serving."
      ]
    },
    {
      id: 2,
      title: "Smoky BBQ Ribs",
      category: "Ribs",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=60",
      description: "Fall-off-the-bone tender ribs with our signature smoky sauce.",
      difficulty: "Advanced",
      time: "3 hours",
      ingredients: [
        "2 racks baby back ribs",
        "1/4 cup brown sugar",
        "1 tbsp smoked paprika",
        "1 tbsp garlic powder",
        "1 tbsp onion powder",
        "1 tsp salt",
        "1 tsp black pepper",
        "1/2 tsp cayenne pepper",
        "1 cup BBQ sauce"
      ],
      method: [
        "Preheat oven to 275°F. Remove the membrane from the back of the ribs.",
        "Mix brown sugar, smoked paprika, garlic powder, onion powder, salt, pepper, and cayenne in a bowl.",
        "Rub spice mixture all over the ribs and wrap them in foil.",
        "Bake for 2.5 hours until ribs are tender.",
        "Preheat grill to medium-high heat and brush ribs with BBQ sauce.",
        "Grill for 5-7 minutes per side until caramelized, then serve."
      ]
    },
    {
      id: 3,
      title: "Spicy Grilled Chicken",
      category: "Chicken",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=500&q=60",
      description: "Juicy chicken with a kick that will spice up your barbecue.",
      difficulty: "Easy",
      time: "40 mins",
      ingredients: [
        "4 boneless chicken thighs",
        "2 tbsp olive oil",
        "1 tbsp chili powder",
        "1 tsp cayenne pepper",
        "1 tsp garlic powder",
        "1 tsp onion powder",
        "1 tsp salt",
        "1 tsp black pepper",
        "Juice of 1 lime"
      ],
      method: [
        "In a bowl, mix olive oil, chili powder, cayenne, garlic powder, onion powder, salt, and pepper.",
        "Coat chicken thighs evenly with the spice mixture and let them marinate for 20 minutes.",
        "Preheat grill to medium heat and cook chicken for 6-7 minutes per side until internal temp reaches 165°F.",
        "Remove from grill, squeeze fresh lime juice on top, and serve."
      ]
    },
    {
      id: 5,
      title: "Grilled Vegetable Medley",
      category: "Vegetables",
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3",
      description: "A colorful mix of seasonal vegetables with herb-infused olive oil.",
      difficulty: "Easy",
      time: "20 mins",
      ingredients: [
        "1 zucchini, sliced",
        "1 red bell pepper, chopped",
        "1 yellow bell pepper, chopped",
        "1 red onion, chopped",
        "1 cup cherry tomatoes",
        "2 tbsp olive oil",
        "1 tsp salt",
        "1/2 tsp black pepper",
        "1 tsp dried oregano",
        "1/2 tsp garlic powder"
      ],
      method: [
        "Preheat grill to medium-high heat.",
        "In a bowl, mix olive oil, salt, pepper, oregano, and garlic powder.",
        "Toss the vegetables in the seasoned oil mixture.",
        "Place vegetables in a grill basket or on skewers.",
        "Grill for 8-10 minutes, turning occasionally until tender.",
        "Serve immediately as a side or over rice."
      ]
    },
    {
      id: 6,
      title: "Texas-Style BBQ Sauce",
      category: "Sauces & Rubs",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=60",
      description: "Sweet and tangy homemade BBQ sauce with a hint of Texas smoke.",
      difficulty: "Easy",
      time: "25 mins",
      ingredients: [
        "1 cup ketchup",
        "1/2 cup apple cider vinegar",
        "1/4 cup brown sugar",
        "1 tbsp Worcestershire sauce",
        "1 tbsp yellow mustard",
        "1 tsp smoked paprika",
        "1 tsp garlic powder",
        "1/2 tsp black pepper",
        "1/2 tsp salt",
        "1/2 tsp cayenne pepper (optional)"
      ],
      method: [
        "In a saucepan, combine all ingredients over medium heat.",
        "Stir continuously until the mixture starts to simmer.",
        "Reduce heat and let simmer for 10-15 minutes, stirring occasionally.",
        "Remove from heat and let it cool.",
        "Store in a jar and refrigerate for up to 2 weeks.",
        "Use as a marinade or dipping sauce for grilled meats."
      ]
    },
    {
      id: 7,
      title: "Chimichurri Skirt Steak",
      category: "Steak",
      image: "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-4.0.3",
      description: "Tender skirt steak topped with fresh and zesty chimichurri sauce.",
      difficulty: "Medium",
      time: "35 mins",
      ingredients: [
        "1 lb skirt steak",
        "2 tbsp olive oil",
        "1 tsp salt",
        "1/2 tsp black pepper",
        "1 tsp garlic powder",
        "1 cup fresh parsley, chopped",
        "3 cloves garlic, minced",
        "1/4 cup red wine vinegar",
        "1/2 cup olive oil",
        "1 tsp red pepper flakes"
      ],
      method: [
        "Season steak with olive oil, salt, pepper, and garlic powder. Let it rest for 10 minutes.",
        "Preheat grill to high heat.",
        "Grill steak for 3-4 minutes per side for medium-rare.",
        "In a bowl, mix parsley, garlic, vinegar, olive oil, and red pepper flakes.",
        "Let steak rest for 5 minutes, then slice against the grain.",
        "Top with chimichurri sauce and serve."
      ]
    },
    {
      id: 8,
      title: "Smoked Pork Ribs",
      category: "Ribs",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3",
      description: "Classic 3-2-1 method for fall-off-the-bone tender pork ribs.",
      difficulty: "Advanced",
      time: "5 hours",
      ingredients: [
        "2 racks pork ribs",
        "1/4 cup brown sugar",
        "1 tbsp smoked paprika",
        "1 tbsp garlic powder",
        "1 tsp salt",
        "1 tsp black pepper",
        "1/2 tsp cayenne pepper",
        "1 cup apple juice",
        "1 cup BBQ sauce"
      ],
      method: [
        "Preheat smoker to 225°F.",
        "Rub ribs with brown sugar, paprika, garlic powder, salt, and pepper.",
        "Smoke ribs for 3 hours uncovered.",
        "Wrap ribs in foil with apple juice and smoke for another 2 hours.",
        "Remove foil, brush with BBQ sauce, and smoke for another hour.",
        "Let rest for 10 minutes, then serve."
      ]
    },
    {
      id: 9,
      title: "Beer Can Chicken",
      category: "Chicken",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3",
      description: "Juicy whole chicken roasted over a can of beer for incredible flavor.",
      difficulty: "Medium",
      time: "1.5 hours",
      ingredients: [
        "1 whole chicken",
        "2 tbsp olive oil",
        "1 tbsp smoked paprika",
        "1 tbsp garlic powder",
        "1 tsp salt",
        "1 tsp black pepper",
        "1 can of beer (half-full)"
      ],
      method: [
        "Preheat grill to medium heat (indirect heat).",
        "Rub chicken with olive oil, paprika, garlic powder, salt, and pepper.",
        "Place the half-full beer can inside the chicken cavity.",
        "Stand the chicken upright on the grill and close the lid.",
        "Cook for about 1 hour 15 minutes, or until internal temperature reaches 165°F.",
        "Let rest for 10 minutes before slicing."
      ]
    },
  {
    id: 10,
    title: "Memphis Dry Rub",
    category: "Sauces & Rubs",
    image: "https://www.thespruceeats.com/thmb/MnI09SfEvOxGCEVzQRwDSyNoDtk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/memphis-bbq-rub-335875-hero-01-7360fbe48b164cb09614e72d09a7e27c.jpg",
    description: "Classic Memphis-style dry rub with the perfect balance of sweet and spicy.",
    difficulty: "Easy",
    time: "10 mins",
    ingredients: [
      "1/4 cup brown sugar",
      "1/4 cup paprika",
      "1 tbsp black pepper",
      "1 tbsp salt",
      "1 tbsp chili powder",
      "1 tbsp garlic powder",
      "1 tbsp onion powder",
      "1 tsp cayenne pepper",
      "1 tsp dried mustard"
    ],
    method: [
      "In a small bowl, mix all ingredients thoroughly.",
      "Rub generously onto ribs, chicken, or pork before grilling or smoking.",
      "For best results, let the rub sit on the meat for at least 30 minutes before cooking.",
      "Store leftovers in an airtight container for future use."
    ]
  },
  {
    id: 11,
    title: "Grilled Shrimp Skewers",
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
    description: "Succulent shrimp skewers with a garlic and herb marinade.",
    difficulty: "Easy",
    time: "20 mins",
    ingredients: [
      "1 lb large shrimp, peeled and deveined",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 tbsp lemon juice",
      "1 tsp smoked paprika",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried oregano",
      "Wooden skewers (soaked in water for 30 mins)"
    ],
    method: [
      "In a bowl, mix olive oil, garlic, lemon juice, paprika, salt, pepper, and oregano.",
      "Toss shrimp in the marinade and let sit for 15 minutes.",
      "Thread shrimp onto skewers.",
      "Preheat grill to medium-high heat.",
      "Grill shrimp for 2-3 minutes per side until pink and opaque.",
      "Serve hot with lemon wedges."
    ]
  },
  {
    id: 12,
    title: "Stuffed Bell Peppers",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3",
    description: "Colorful bell peppers stuffed with rice, cheese, and grilled to perfection.",
    difficulty: "Medium",
    time: "45 mins",
    ingredients: [
      "4 bell peppers, halved and seeds removed",
      "1 cup cooked rice",
      "1/2 lb ground beef or turkey",
      "1/2 cup diced tomatoes",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup chopped onion",
      "1 clove garlic, minced",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp oregano",
      "2 tbsp olive oil"
    ],
    method: [
      "Preheat grill to medium heat.",
      "In a skillet, heat olive oil and sauté onions and garlic until soft.",
      "Add ground meat and cook until browned.",
      "Mix in cooked rice, diced tomatoes, salt, pepper, and oregano.",
      "Stuff the bell pepper halves with the mixture and top with shredded cheese.",
      "Place stuffed peppers on the grill and cook for 15-20 minutes until the cheese is melted and peppers are tender.",
      "Serve hot."
    ]
  },
  {
    id: 13,
    title: "Cedar Plank Salmon",
    category: "Seafood",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3",
    description: "Salmon fillets grilled on cedar planks for a subtle smoky flavor.",
    difficulty: "Medium",
    time: "30 mins",
    ingredients: [
      "2 salmon fillets",
      "1 cedar plank (soaked in water for 1 hour)",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp garlic powder",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried dill"
    ],
    method: [
      "Preheat grill to medium heat (350°F).",
      "In a small bowl, mix olive oil, lemon juice, garlic powder, salt, pepper, and dill.",
      "Brush salmon fillets with the mixture.",
      "Place soaked cedar plank on the grill for 5 minutes until it starts to smoke.",
      "Place salmon fillets on the plank and close the grill lid.",
      "Grill for 12-15 minutes until the salmon flakes easily with a fork.",
      "Serve with lemon wedges."
    ]
  }
  ];
  
  export default recipesData;
  