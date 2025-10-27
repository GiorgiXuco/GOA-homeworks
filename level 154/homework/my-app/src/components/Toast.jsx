import React, { useEffect, useState } from "react";

function Toast({ content, expiresIn = 3000, background = "#111827" }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (expiresIn <= 0) return;

        const timer = setTimeout(() => {
            setVisible(false);
        }, expiresIn);

        return () => clearTimeout(timer);
    }, [expiresIn]);

    if (!visible) return null;

    return (
        <div
            className="fixed right-4 top-6 z-[9999] transition-all duration-300"
            style={{
                background,
                padding: "12px 16px",
                borderRadius: "8px",
                color: "#fff",
                minWidth: "200px",
            }}
        >
            {content}
        </div>
    );
}

export default Toast;
