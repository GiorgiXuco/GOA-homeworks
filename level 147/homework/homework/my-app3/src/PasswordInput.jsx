import { useState } from "react";

export default function PasswordInput() {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible((prev) => !prev);
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
                <h1 className="text-xl font-bold mb-4 text-center">Password Input</h1>

                <input
                    type="text"
                    value={visible ? password : "*".repeat(password.length)}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full p-2 border rounded-md mb-4"
                />

                <button
                    onClick={handleToggle}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    {visible ? "Hide Password" : "Show Password"}
                </button>
            </div>
        </div>
    );
}
