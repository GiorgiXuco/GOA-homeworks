import React from "react";
import UserStatus from "./UserStatus";

function App() {
  return (
    <div>
      <UserStatus userName="Nika" isOnline={true} />
      <UserStatus userName="Ana" isOnline={false} />
      <UserStatus userName="Luka" /> {/* ნაგულისხმევად false იქნება */}
    </div>
  );
}

export default App;
