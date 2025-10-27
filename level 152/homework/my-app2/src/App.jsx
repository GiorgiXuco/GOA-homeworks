import Greeting from "./Greeting";
import Description from "./Description";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">React Forms Example</h1>
      
      <Greeting />

      <hr className="my-6" />

      <Description />
    </div>
  );
}

export default App;
