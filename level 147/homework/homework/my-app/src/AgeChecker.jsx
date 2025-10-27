import { useState } from "react";

export default function AgeChecker() {
    const [age, setAge] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isAllowed, setIsAllowed] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!age) return;
        if (parseInt(age) >= 18) {
            setIsAllowed(true);
        } else {
            setIsAllowed(false);
        }
        setSubmitted(true);
    };

    const handleReset = () => {
        setAge("");
        setSubmitted(false);
        setIsAllowed(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
            >
                <h1 className="text-xl font-bold mb-4 text-center">Age Checker</h1>

                {!submitted ? (
                    <>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age"
                            className="w-full p-2 border rounded-md mb-4"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </>
                ) : (
                    <>
                        {isAllowed !== null && (
                            <div
                                className={`p-3 mb-4 rounded-md text-white text-center font-semibold shadow-md transition duration-300
                ${isAllowed ? "bg-green-500" : "bg-red-500"}`}
                            >
                                {isAllowed ? "You Are Allowed" : "You Are Not Allowed"}
                            </div>
                        )}
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
                        >
                            Reset
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}
