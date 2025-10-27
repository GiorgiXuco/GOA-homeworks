import React from "react";
import "./DragonComponent.css";
import dragonImage from "../assets/dragon.jpg";

function DragonComponent() {
    return (
        <div className="dragon-card">
            <img src={dragonImage} alt="Fierce Dragon" className="dragon-image" />
            <h2 className="dragon-title">ჩემი დრაკონი</h2>
            <p className="dragon-description">
                ეს დრაკონი არის ძლიერი, მაგიური და ულამაზესი, მზად არის თქვენი
                ისტორიებისთვის.
            </p>
            <button className="dragon-button">მეტი ინფორმაცია</button>
        </div>
    );
}

export default DragonComponent;
