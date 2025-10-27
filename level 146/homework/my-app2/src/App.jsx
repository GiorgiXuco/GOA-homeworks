import Product from "./Product";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Product
        title="ლეპტოპი"
        price="2500"
        image="https://via.placeholder.com/150"
      />
      <Product
        title="სმარტფონი"
        price="1500"
        image="https://via.placeholder.com/150"
      />
      <Product
        title="ყურსასმენები"
        price="300"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}