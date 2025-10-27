import { useState } from "react";

function Greeting() {
    const [name, setName] = useState("");

    return (
        <div className="p-4">
            <form>
                <input
                    type="text"
                    placeholder="შეიყვანე შენი სახელი"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                />
            </form>

            <h2 className="mt-4 text-xl">
                Hello, {name}
            </h2>
        </div>
    );
}

export default Greeting;
