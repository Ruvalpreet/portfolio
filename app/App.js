import React, { useState, useEffect } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="relative h-screen z-20">
      <div
        className="w-10 h-10 bg-blue-500 bg-transparent border-2 border-blue-500  rounded-full absolute transition-opacity duration-100  hover:border-red-600 hover:border-4"
        style={{ left: mousePosition.x - 18, top: mousePosition.y - 18 }}
      ></div>
    </div>
  );
}

export default App;
