import DrawRec from "./DrawRec";

export default function App() {
  return (
    <div>
      <DrawRec color="red" width="150px" height="100px" />
      <DrawRec color="blue" width="200px" height="150px" />
      <DrawRec color="green" width="100px" height="200px" />
      <DrawRec color="orange" width="250px" height="50px" />
    </div>
  );
}
