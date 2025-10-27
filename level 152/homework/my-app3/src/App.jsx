import Greeting from "./Greeting";
import Description from "./Description";
import Mood from "./Mood";

function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">React Forms Example</h1>

      <Greeting />

      <Description />

      <Mood />
    </div>
  );
}

export default App;
