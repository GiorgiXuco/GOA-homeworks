import React, { useState, useEffect } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (email.includes("@") && password.length >= 6) {
            console.log("Valid Credentials");
        } else {
            console.log("Invalid email or password");
        }
    }, [email, password]);

    return (
        <div className="p-4">
            <h2>Login Form</h2>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", marginBottom: "10px" }}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", marginBottom: "10px" }}
            />
        </div>
    );
}
