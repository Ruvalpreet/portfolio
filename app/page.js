"use client";
import Link from "next/link";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js";
import backgroundImage from "./assets/BackgroundImage.jpg";
import Image from "next/image";
import App from "./App";
import Navigation from "./Navigation/page";
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
    <div>
      <Navigation />
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <App />

      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-3">
        <div className="text-6xl font-bold mb-6">HELLO, MY NAME IS RUVAL</div>
        <div className="font-bold text-4xl text-yellow-500">
          And I&apos;m a <span className="typing"></span>
        </div>
      </div>
    </div>
  );
}
