import { useState } from "react";

export default function TemperatureConverter() {
    const [value, setValue] = useState("");
    const [conversionType, setConversionType] = useState(null);
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "" || conversionType === null) {
            alert("Please enter a value and select a conversion type");
            return;
        }

        const num = parseFloat(value);
        if (conversionType === 1) {
            // Celsius -> Fahrenheit
            setResult(((num * 9) / 5 + 32).toFixed(2));
        } else if (conversionType === 2) {
            // Fahrenheit -> Celsius
            setResult((((num - 32) * 5) / 9).toFixed(2));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
            >
                <h1 className="text-xl font-bold mb-4 text-center">
                    Temperature Converter
                </h1>

                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter value"
                    className="w-full p-2 border rounded-md mb-4"
                    required
                />

                <div className="flex gap-2 mb-4">
                    <button
                        type="button"
                        onClick={() => setConversionType(1)}
                        className={`flex-1 py-2 rounded-md text-white font-semibold transition duration-200
              ${conversionType === 1 ? "bg-blue-600" : "bg-blue-500 hover:bg-blue-600"}`}
                    >
                        1. Celsius To Fahrenheit
                    </button>
                    <button
                        type="button"
                        onClick={() => setConversionType(2)}
                        className={`flex-1 py-2 rounded-md text-white font-semibold transition duration-200
              ${conversionType === 2 ? "bg-green-600" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        2. Fahrenheit To Celsius
                    </button>
                </div>

                {conversionType && (
                    <p className="mb-4 font-semibold text-center">
                        You Have Selected: {conversionType}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
                >
                    Submit
                </button>

                {result !== null && (
                    <p className="mt-4 text-center font-bold text-lg">
                        Result: {result}° {conversionType === 1 ? "F" : "C"}
                    </p>
                )}
            </form>
        </div>
    );
}
