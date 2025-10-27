function User({ name, bio = "No Bio", age = 18 }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Bio: {bio}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <User name="Nika" bio="React Developer" age={25} />
      <User name="Ana" bio="Designer" />
      <User name="Gio" age={30} />
      <User name="Mariam" />
    </div>
  );
}