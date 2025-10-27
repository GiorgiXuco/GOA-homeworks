import React from "react";
import "./CatComponent.css";
import catImage from "../assets/cat.jpg"; // სურათის იმპორტი

function CatComponent() {
    return (
        <div className="cat-card">
            <img src={catImage} alt="Cute Cat" className="cat-image" />
            <h2 className="cat-title">ჩემი კატა</h2>
            <p className="cat-description">
                ეს არის ფუმფულა და ჭკვიანი კატა, რომელიც უყვარს დაძინება მზიან ფანჯარასთან.
            </p>
            <button className="cat-button">მეტი ინფორმაცია</button>
        </div>
    );
}

export default CatComponent;
