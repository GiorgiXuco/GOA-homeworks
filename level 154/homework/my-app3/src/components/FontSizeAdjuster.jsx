import React, { useState } from "react";
import Toast from "./Toast";

function FontSizeAdjuster() {
    const [size, setSize] = useState(16); // საწყისი font-size
    const [inputValue, setInputValue] = useState("");
    const [toast, setToast] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = Number(inputValue);

        if (isNaN(number) || number < 10 || number > 100) {
            setToast({
                content: "Please enter a number between 10 and 100!",
                background: "#dc2626", // წითელი error
                expiresIn: 3000,
            });
            return;
        }

        setSize(number);
        setToast({
            content: `Font size set to ${number}px!`,
            background: "#059669", // მწვანე success
            expiresIn: 3000,
        });
    };

    const handleReset = () => {
        setSize(16); // back to default
        setInputValue("");
        setToast({
            content: "Font size reset to default (16px)",
            background: "#3b82f6", // ლურჯი info
            expiresIn: 3000,
        });
    };

    return (
        <div className="p-4 space-y-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="number"
                    placeholder="Enter 10 - 100"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 rounded w-32"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </form>

            <p style={{ fontSize: `${size}px` }}>
                This text will change its font size.
            </p>

            {toast && (
                <Toast
                    content={toast.content}
                    background={toast.background}
                    expiresIn={toast.expiresIn}
                />
            )}
        </div>
    );
}

export default FontSizeAdjuster;
