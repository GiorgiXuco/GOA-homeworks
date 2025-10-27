import { useState } from "react";

function SearchBar({ onSearch }) {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        onSearch(username);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center bg-[#1E2A47] rounded-xl p-2"
        >
            <input
                type="text"
                placeholder="Search GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 bg-transparent outline-none px-3 text-sm placeholder-gray-400"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
