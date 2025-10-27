import React from "react";
import UserStatus from "./UserStatus";

function UserFriends({ friends = [] }) {
    if (friends.length === 0) {
        return <p>You Don't Have Friends Yet.</p>;
    }

    return (
        <div>
            <h3>This is Your Friends list:</h3>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>
                        {friend.profilePic}{" "}
                        <UserStatus
                            userName={friend.name}
                            isOnline={friend.status === "online"}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserFriends;
