function Greeting(props) {
    return <h2>გამარჯობა {props.name}</h2>;
}

export default function App() {
    return (
        <div>
            <Greeting name="ნინო" />
            <Greeting name="გიორგი" />
            <Greeting name="ანა" />
            <Greeting name="დავითი" />
        </div>
    );
}
