import React from "react";
import Card from "./components/card";

function App() {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <Card
                title="React Card"
                text="ეს არის მარტივი Card კომპონენტი, რომელსაც აქვს სათაური და პარაგრაფი."
            />
            <Card
                title="სხვა ბარათი"
                text="კომპონენტის ხელახლა გამოყენება ძალიან მარტივია."
            />
        </div>
    );
}

export default App;
