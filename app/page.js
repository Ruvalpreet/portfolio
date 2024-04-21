"use client";
import Link from "next/link";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js";
import backgroundImage from "./assets/BackgroundImage.jpg";
import Image from "next/image";
import App from "./App";
export default function Home() {
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
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <App />
      <Link href="/AboutMe">
        <div className="text-green-200 text-3xl font-bold">About Me</div>
      </Link>
      <Link href="/Project">
        <div className="text-green-200 text-3xl font-bold">My Project</div>
      </Link>
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="text-6xl font-bold mb-6">Hello, my name is Ruval</div>
        <div className="font-bold text-4xl text-blue-500">
          And I&apos;m a <span className="typing"></span>
        </div>
      </div>
    </div>
  );
}
