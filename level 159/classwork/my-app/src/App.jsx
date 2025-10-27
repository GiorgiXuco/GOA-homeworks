import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (name.length >= 12) {
      console.log("correct Name");
    } else if (age >= 18) {
      console.log("correct age");
    } else {
      console.log("invalid name or value");
    }
  }, [name, age]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">მომხმარებლის მონაცემები</h1>

      <input
        type="text"
        placeholder="შეიყვანე სახელი"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-3 w-full"
      />

      <input
        type="number"
        placeholder="შეიყვანე ასაკი"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="border p-2 rounded mb-3 w-full"
      />

      <p>სახელი: {name}</p>
      <p>ასაკი: {age}</p>
    </div>
  );
}
