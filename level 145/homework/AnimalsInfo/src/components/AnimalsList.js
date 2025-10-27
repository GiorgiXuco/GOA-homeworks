import React from "react";
import "./AnimalsList.css";

function AnimalsList({ children }) {
    return (
        <div className="animals-list">
            <h1 className="animals-list-title">ჩემს საყვარელ ცხოველების სიაში</h1>
            <div className="animals-list-grid">{children}</div>
        </div>
    );
}

export default AnimalsList;
