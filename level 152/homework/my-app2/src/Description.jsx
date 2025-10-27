import { useState } from "react";

function Description() {
    const [desc, setDesc] = useState("");          
    const [submitted, setSubmitted] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();       
        setSubmitted(desc);       
        setDesc("");              
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="შეიყვანე აღწერა"
                    className="border p-2 rounded w-full"
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Submit
                </button>
            </form>

            <p className="mt-4 text-lg">
                {submitted ? `Your Description: ${submitted}` : "No Description"}
            </p>
        </div>
    );
}

export default Description;
