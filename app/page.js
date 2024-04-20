import Link from "next/link";
import Navigation from "./Main/Navigation";
import HomeSection from "./Main/HomeSection";
import AboutMe from "./Main/AboutMe";
import MyProject from "./Main/MyPoroject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeSection />
      <AboutMe />
      <MyProject />
    </main>
  );
}
