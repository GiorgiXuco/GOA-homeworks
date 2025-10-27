import React, { useState } from "react";

export default function MyForm() {
    const [formData, setFormData] = useState({
        fruit: "",
        car: "",
        country: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2>შეიყვანეთ თქვენი ინფორმაცია</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                    type="text"
                    name="fruit"
                    placeholder="საყვარელი ხილი"
                    value={formData.fruit}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="car"
                    placeholder="საყვარელი მანქანა"
                    value={formData.car}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="country"
                    placeholder="საყვარელი ქვეყანა"
                    value={formData.country}
                    onChange={handleChange}
                />
                <button type="submit">გაგზავნა</button>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <h3>შეტანილი ინფორმაცია:</h3>
                    <p>🍎 საყვარელი ხილი: {submittedData.fruit}</p>
                    <p>🚗 საყვარელი მანქანა: {submittedData.car}</p>
                    <p>🌍 საყვარელი ქვეყანა: {submittedData.country}</p>
                </div>
            )}
        </div>
    );
}
