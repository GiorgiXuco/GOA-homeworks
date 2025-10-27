import React from "react";

function UserStatus({ userName, isOnline = false }) {
    return (
        <p>
            {userName} is {isOnline ? "Online" : "Offline"}
        </p>
    );
}

export default UserStatus;
