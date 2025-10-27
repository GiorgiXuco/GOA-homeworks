import { useState } from "react";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full max-w-md mx-auto">
      <button
        onClick={toggleAccordion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
      >
        {isOpen ? "Close Accordion" : "Open Accordion"}
      </button>

      {isOpen && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow w-full">
          <p>
            ეს არის აკორდიონის შიგთავსი. აქ შეგიძლია ნებისმიერი ტექსტი ან კომპონენტი დაამატო.
          </p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
