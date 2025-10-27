export default function DrawRec(props) {
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
                margin: "10px",
                border: "1px solid black",
            }}
        ></div>
        
    );
}