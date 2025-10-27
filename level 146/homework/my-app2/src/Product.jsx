export default function Product(props) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={props.image} alt={props.title} style={{ width: "100%" }} />
            <h3>{props.title}</h3>
            <p>ფასი: {props.price} ₾</p>
        </div>
    );
}
