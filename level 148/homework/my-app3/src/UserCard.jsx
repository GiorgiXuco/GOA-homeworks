import React from "react";
import UserStatus from "./UserStatus";
import UserFriends from "./UserFriends";

function UserCard({ firstName, lastName, age, gender, isOnline = false, friends = [] }) {
    return (
        <div
            style={{
                border: "2px solid #ccc",
                borderRadius: "12px",
                padding: "16px",
                margin: "16px auto",
                maxWidth: "400px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9"
            }}
        >
            <h2 style={{ marginBottom: "8px" }}>
                {firstName} {lastName}
            </h2>
            <p><b>Age:</b> {age}</p>
            <p><b>Gender:</b> {gender}</p>
            <p>
                <b>Status:</b>{" "}
                <UserStatus userName={firstName} isOnline={isOnline} />
            </p>
            <div style={{ marginTop: "12px" }}>
                <UserFriends friends={friends} />
            </div>
        </div>
    );
}


export default UserCard;
