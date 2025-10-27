import React, { useState, useEffect } from "react";

export default function ActivityTracker() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (count > 10 && isActive === true) {
            console.log("High activity");
        } else if (count <= 10 && isActive === false) {
            console.log("Low activity");
        } else {
            console.log("Normal state");
        }
    }, [count, isActive]);

    return (
        <div className="p-4">
            <h2>Activity Tracker</h2>
            <p>Count: {count}</p>
            <p>Active: {isActive ? "true" : "false"}</p>

            <button
                onClick={() => setCount(count + 1)}
                style={{ marginRight: "10px" }}
            >
                Increase Count
            </button>

            <button onClick={() => setIsActive(!isActive)}>
                Toggle Active
            </button>
        </div>
    );
}
