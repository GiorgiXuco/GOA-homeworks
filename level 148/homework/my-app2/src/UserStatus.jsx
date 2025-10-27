import React from "react";

function UserStatus({ userName, isOnline = false }) {
    return (
        <span>{isOnline ? `${userName} is Online` : `${userName} is Offline`}</span>
    );
}

export default UserStatus;
