import Link from "next/link";

function Navigation() {
  return (
    <div className="flex justify-center space-x-4 m-8 border-b-2 ">
      <Link href="/">
        <div className="text-yellow-500 text-2xl font-semibold  hover:text-yellow-800 transition duration-300 border-2 border-b-0  p-2">
          Home
        </div>
      </Link>
      <Link href="/AboutMe">
        <div className="text-yellow-500 text-2xl font-semibold hover:text-yellow-800 transition duration-300 border-2 border-b-0 p-2">
          About Me
        </div>
      </Link>
      <Link href="/Project">
        <div className="text-yellow-500 text-2xl font-semibold hover:text-yellow-800 transition duration-300 border-2 border-b-0 p-2">
          My Project
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
