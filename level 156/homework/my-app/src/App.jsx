import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async (username) => {
    try {
      setError(null);
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setUser(null);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#141D2F] text-white flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-xl space-y-6">
        <Header />
        <SearchBar onSearch={fetchUser} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        {user && <UserCard user={user} />}
      </div>
    </div>
  );
}

export default App;
