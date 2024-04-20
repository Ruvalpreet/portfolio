"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import backgroundImage from "../assets/BackgroundImage.jpg";
import Image from "next/image";
const HomeSection = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Software Developer",
        "Full-Stack Developer",
        "Web Developer",
        "Programmer",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Image
        src={backgroundImage}
        alt="Background Image"
        className="w-full max-h-screen object-cover"
      />
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="text-6xl font-bold mb-6">Hello, my name is Ruval</div>
        <div className="font-bold text-4xl text-blue-500">
          And I'm a <span className="typing"></span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
