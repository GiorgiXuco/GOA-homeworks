import React, { useState } from "react";
import Toast from "./Toast";

function Username() {
    const [username, setUsername] = useState("");
    const [toast, setToast] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const onlyLetters = /^[A-Za-zა-ჰ]+$/;

        if (!username.trim()) {
            setToast({
                content: "Username cannot be empty!",
                background: "#dc2626", // წითელი error
                expiresIn: 3000,
            });
        } else if (!onlyLetters.test(username)) {
            setToast({
                content: "Username must not contain numbers or symbols!",
                background: "#dc2626", // წითელი error
                expiresIn: 3000,
            });
        } else {
            setToast({
                content: "Username accepted successfully!",
                background: "#059669", // მწვანე success
                expiresIn: 3000,
            });
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>

            {/* ვაჩვენებთ Toast-ს მხოლოდ თუ არსებობს */}
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

export default Username;
