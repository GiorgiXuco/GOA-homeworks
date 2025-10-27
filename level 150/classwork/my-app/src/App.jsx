import React, { useState } from "react";

export default function ShowName() {
  const [visible, setVisible] = useState(false);

  const firstName = "giorgi";
  const lastName = "khutsishvili";

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <button
        onClick={() => setVisible((v) => !v)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {visible ? "დამალე სახელი" : "აჩვენე სახელი"}
      </button>

      {}
      <div className="mt-4">
        {visible && (
          <div>
            <p className="text-lg font-medium">{firstName} {lastName}</p>
          </div>
        )}
      </div>
    </div>
  );
}
