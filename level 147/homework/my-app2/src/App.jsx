import Card from "./Card";

export default function App() {
  return (
    <div style={{ padding: "20px", background: "#f5f5f5" }}>
      {/* Card children-ით */}
      <Card>
        <h2>Default Card</h2>
        <p>ეს არის პირველი ბარათი. TopMargin არ არის ჩართული.</p>
      </Card>

      {/* Card topMargin-ით */}
      <Card topMargin={true}>
        <h2>Card with Margin</h2>
        <p>ამ ბარათს აქვს default margin = 10px.</p>
      </Card>

      {/* Card topMargin + custom marginAmount */}
      <Card topMargin={true} marginAmount={30}>
        <h2>Card with Custom Margin</h2>
        <p>ამ ბარათს აქვს margin = 30px.</p>
      </Card>
    </div>
  );
}
