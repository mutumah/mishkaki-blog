import React, {useEffect} from "react";
import "./Tips.css";

const Tips = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const grillingTips = [
    {
      id: 1,
      title: "🔥 Preheat Your Grill",
      description: "Always preheat your grill for at least 10-15 minutes before cooking. This ensures even cooking and prevents food from sticking."
    },
    {
      id: 2,
      title: "🛢️ Use Indirect Heat for Large Cuts",
      description: "For thick cuts of meat, use indirect heat by placing them away from direct flames to avoid burning the outside while cooking the inside."
    },
    {
      id: 3,
      title: "🌡️ Get a Meat Thermometer",
      description: "Using a thermometer guarantees perfectly cooked meat. For example, medium-rare steak should reach 130°F (54°C)."
    },
    {
      id: 4,
      title: "🌿 Let It Rest",
      description: "After grilling, let meat rest for 5-10 minutes before slicing. This helps retain juices for a more flavorful bite."
    },
    {
      id: 5,
      title: "🧂 Don’t Overdo the Seasoning",
      description: "Salt enhances flavors, but too much can overpower the meat. Try using dry rubs or marinades for a balanced taste."
    }
  ];

  return (
    <div className="tips-page">
      <h1>🔥 Pro Grilling Tips</h1>
      <p>Master the art of barbecue with these essential grilling techniques.</p>

      <div className="tips-list">
        {grillingTips.map((tip) => (
          <div className="tip-card" key={tip.id}>
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
