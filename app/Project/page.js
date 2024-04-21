"use client";
import { useState } from "react";

function MyProject() {
  const [slideRight, setSlideRight] = useState(false);

  const toggleSlide = () => {
    setSlideRight(!slideRight);
  };
  return (
    <div className="bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">My Project</h1>
    </div>
  );
}

export default MyProject;
