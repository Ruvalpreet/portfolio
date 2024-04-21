"use client";
import Image from "next/image";
import Profile from "../assets/profile.jpg";
import Navigation from "../Navigation/page";
import Typed from "typed.js";
import App from "../App";
import { useEffect } from "react";
function page() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "a dedicated software developer with a passion for elegant solutions. Graduating with a 4.00/4.00 GPA from the Southern Alberta Institute of Technology, I&apos;ve honed my skills in Data Structures, Database Designing, and Web Application Programming. I bring a commitment to growth, innovation, and collaborative development. Let's connect on LinkedIn for exciting opportunities.",
      ],
      typeSpeed: 1,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <Navigation />
      <h1 className="text-7xl font-bold mr-4 text-center text-yellow-500 ">
        About Me
      </h1>

      <div className="flex items-center justify-center  ">
        <div className="m-10">
          <Image
            src={Profile}
            alt="Profile"
            className="h-80 w-64 rounded-full object-cover hover:animate-pulse "
          />
          <h2 className="text-3xl font-bold mt-4 justify-center flex text-yellow-500 ">
            Ruval
          </h2>
        </div>
        <p className="m-10 max-w-3xl pb-36 text-2xl ">
          <span className="text-yellow-500 text-3xl ">I&apos;m Ruval,</span>
          <span className="text-2xl ml-2 typing"></span>
        </p>
      </div>
    </div>
  );
}

export default page;
