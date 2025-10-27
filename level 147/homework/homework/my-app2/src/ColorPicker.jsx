import { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState("#ffffff");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color.match(/^#([0-9A-Fa-f]{6})$/)) {
            setSelectedColor(color);
        } else {
            alert("Please enter a valid HEX color code (e.g. #ff0000)");
        }
    };

    const handleRandomColor = () => {
        const randomHex =
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        setColor(randomHex);
        setSelectedColor(randomHex);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-6"
            style={{ backgroundColor: selectedColor || "#ffffff" }}
        >
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
            >
                <h1 className="text-xl font-bold mb-4 text-center">Color Picker</h1>

                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#RRGGBB"
                    className="w-full p-2 border rounded-md mb-4"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-2"
                >
                    Apply Color
                </button>

                <button
                    type="button"
                    onClick={handleRandomColor}
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                >
                    Random Color
                </button>

                {selectedColor && (
                    <p className="mt-4 text-center font-semibold">
                        You selected: {selectedColor}
                    </p>
                )}
            </form>
        </div>
    );
}
