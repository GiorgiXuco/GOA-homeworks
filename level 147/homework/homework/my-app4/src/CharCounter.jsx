import { useState } from "react";

export default function CharCounter() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        if (e.target.value.length <= 100) {
            setText(e.target.value);
        }
    };

    const handleReset = () => {
        setText("");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                <h1 className="text-xl font-bold mb-4 text-center">Character Counter</h1>

                <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder="Type something..."
                    className="w-full h-32 p-2 border rounded-md mb-4 resize-none"
                />

                <p className="mb-2 font-semibold">Total Characters: {text.length}</p>

                {text.length === 100 && (
                    <p className="text-red-500 font-bold mb-2">
                        You Reached Character Limit
                    </p>
                )}

                <button
                    onClick={handleReset}
                    className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
