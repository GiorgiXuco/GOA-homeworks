import React, { useState, useEffect } from "react";
import Toast from "./Toast";

function NumberGuesser() {
    const [target, setTarget] = useState(null); // ჩაფიქრებული რიცხვი
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("Start guessing between 1 and 100!");
    const [attempts, setAttempts] = useState(0);
    const [toast, setToast] = useState(null);

    // ინიციალიზაცია
    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setTarget(randomNumber);
        setGuess("");
        setAttempts(0);
        setMessage("Start guessing between 1 and 100!");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = Number(guess);

        if (!number || number < 1 || number > 100) {
            setToast({
                content: "Enter a number between 1 and 100!",
                background: "#dc2626", // error
                expiresIn: 3000,
            });
            return;
        }

        setAttempts((prev) => prev + 1);

        if (number === target) {
            setMessage(`🎉 Correct! The number was ${target}. Attempts: ${attempts + 1}`);
            setToast({
                content: `You guessed it in ${attempts + 1} tries!`,
                background: "#059669", // success
                expiresIn: 4000,
            });
        } else if (number < target) {
            setMessage("📉 Too low! Try a bigger number.");
        } else {
            setMessage("📈 Too high! Try a smaller number.");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
            <h2 className="text-2xl font-bold">Number Guesser 🎲</h2>
            <p className="text-gray-700">{message}</p>

            <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
                <input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter number"
                    className="border p-2 rounded w-32 text-center"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Guess
                </button>
            </form>

            <button
                onClick={startNewGame}
                className="bg-gray-500 text-white px-4 py-2 rounded"
            >
                Restart Game
            </button>

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

export default NumberGuesser;
