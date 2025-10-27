import { useState } from "react";

function App() {
  const [number, setNumber] = useState(2);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number * 2)}>
        გააორმაგე
      </button>
    </div>
  );
}

export default App;
