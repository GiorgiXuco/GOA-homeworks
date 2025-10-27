import { useState } from "react";

function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={() => setLiked(!liked)}
        className="focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 transition-colors duration-200 ${
            liked ? "text-red-500" : "text-gray-300"
          }`}
          fill={liked ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21C12 21 5 14.5 5 9.5C5 6 7.5 4 12 8C16.5 4 19 6 19 9.5C19 14.5 12 21 12 21Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Like;
