import React from "react";
import UserCard from "./UserCard";

function App() {
  const myFriends = [
    { name: "Jon", status: "offline", profilePic: "😎" },
    { name: "Bob", status: "online", profilePic: "🤗" },
    { name: "Ana", status: "online", profilePic: "🌸" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <UserCard 
        firstName="Gio" 
        lastName="Xuco" 
        age={22} 
        gender="Male" 
        isOnline={true} 
        friends={myFriends} 
      />
    </div>
  );
}

export default App;
