import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#1E1E2F] py-4 flex justify-center">
        <h1 className="text-white text-3xl font-semibold">amazon</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-16">
        {/* Watch */}
        <div className="relative flex flex-col items-center">
          <div className="bg-black rounded-2xl p-4 border-4 border-gray-300 w-44 h-56 flex items-center justify-center">
            <span className="text-white text-xl font-bold">{time}</span>
          </div>
          <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-gray-400 rounded-full w-4 h-8"></div>
          <div className="bg-black w-12 h-16 rounded-b-lg absolute top-[-30px]"></div>
          <div className="bg-black w-12 h-16 rounded-t-lg absolute bottom-[-30px]"></div>
        </div>

        {/* Details */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">
            FitBit 19 - <span className="font-extrabold">The Smartest Watch</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperioresbr adipisci culpa rem? A, tenetur veritatis
          </p>

          <h3 className="font-semibold mt-6 text-lg">Select Color</h3>
          <div className="flex gap-4 mt-2">
            <div className="w-8 h-8 bg-black rounded"></div>
            <div className="w-8 h-8 bg-[#d34a32] rounded"></div>
            <div className="w-8 h-8 bg-[#646499] rounded"></div>
            <div className="w-8 h-8 bg-[#8d616e] rounded"></div>
          </div>

          <h3 className="font-semibold mt-6 text-lg">Features</h3>
          <div className="flex gap-4 mt-2">
            <div className="bg-gray-100 px-3 py-1 rounded font-semibold text-sm shadow">
              Time
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded font-semibold text-sm shadow">
              Heart Rate
            </div>
          </div>

          <button className="mt-8 bg-[#FFA500] text-black font-bold px-8 py-2 rounded hover:bg-[#ffb733] transition">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
