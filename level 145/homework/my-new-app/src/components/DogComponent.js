import React from "react";
import "./DogComponent.css";
import dogImage from "../assets/dog.jpg"; // სურათის იმპორტი

function DogComponent() {
    return (
        <div className="dog-card">
            <img src={dogImage} alt="Cute Dog" className="dog-image" />
            <h2 className="dog-title">ჩემი ძაღლი</h2>
            <p className="dog-description">
                ეს არის საყვარელი და მეგობრული ძაღლი, რომელიც ყოველთვის მზად არის სათამაშოდ.
            </p>
            <button className="dog-button">მეტი ინფორმაცია</button>
        </div>
    );
}

export default DogComponent;
