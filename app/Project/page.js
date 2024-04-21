"use client";
import { useState } from "react";
import Navigation from "../Navigation/page";

function MyProject() {
  const [slideRight, setSlideRight] = useState(false);

  const toggleSlide = () => {
    setSlideRight(!slideRight);
  };
  return (
    <div>
      <Navigation />
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gray-800 text-white">
          My Project
        </h1>
      </div>
    </div>
  );
}

export default MyProject;
