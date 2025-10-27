import { useState } from "react";

function Mood() {
    const [moodInput, setMoodInput] = useState("");
    const [mood, setMood] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const lowerMood = moodInput.toLowerCase().trim();

        switch (lowerMood) {
            case "happy":
                setMood("😀");
                break;
            case "sad":
                setMood("🙁");
                break;
            case "scared":
                setMood("😰");
                break;
            case "angry":
                setMood("😡");
                break;
            default:
                setMood("Unknown 🤷‍♂️");
        }

        setMoodInput("");
    };

    return (
        <div className="p-4 border rounded mb-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="როგორ ხასიათზე ხარ?"
                    value={moodInput}
                    onChange={(e) => setMoodInput(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                    Submit
                </button>
            </form>
            <p className="mt-4 text-lg">
                {mood ? `Your Mood: ${mood}` : "Your Mood: Unknown 🤷‍♂️"}
            </p>
        </div>
    );
}

export default Mood;
