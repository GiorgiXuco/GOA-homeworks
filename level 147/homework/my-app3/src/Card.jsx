function Card({ children, topMargin = false, marginAmount = 10 }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                background: "#fff",
                padding: "16px",
                marginTop: topMargin ? `${marginAmount}px` : "0px",
            }}
        >
            {children}
        </div>
    );
}

export default Card;