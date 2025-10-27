import React from "react";
import UserFriends from "./UserFriends";

function App() {
  const friendsList = [
    { name: "Jon", status: "offline", profilePic: "😎" },
    { name: "Bob", status: "online", profilePic: "🤗" }
  ];

  return (
    <div>
      <UserFriends friends={friendsList} />
      <hr />
      <UserFriends friends={[]} />
    </div>
  );
}

export default App;
