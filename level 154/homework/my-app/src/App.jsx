import React from "react";
import Toast from "./components/Toast";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Toast
        content="წარმატებით შესრულდა!"
        expiresIn={3000}
        background="#059669"
      />
    </div>
  );
}

export default App;
