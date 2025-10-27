import { useState } from "react";

function CaseChanger() {
  const [text, setText] = useState(
    "ეს არის მაგალითი გრძელ ტექსტის"
  );

  const toggleCase = () => {
    const isUpperCase = text === text.toUpperCase();
    setText(isUpperCase ? text.toLowerCase() : text.toUpperCase());
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleCase}>
        შეცვალე ასოების რეგისტრი
      </button>
    </div>
  );
}

export default CaseChanger;