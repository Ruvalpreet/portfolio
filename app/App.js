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
    <div className="relative h-screen z-200">
      <div
        className=" w-10 h-10 bg-transparent border-2 border-blue-500 rounded-full sticky transition-colors duration-1000 hover:border-red-600 hover:border-4"
        style={{ left: mousePosition.x - 18, top: mousePosition.y - 18 }}
      ></div>
    </div>
  );
}

export default App;
