import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header className=" flex items-center justify-end p-5">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className=" hover:underline">
          Gmail
        </Link>
        <Link href="https://umage.google.com" className=" hover:underline">
          Images
        </Link>
        <TbGridDots className=" bg-transparent hover:bg-gray-200 rounded-full text-4xl cursor-pointer" />
        <button className=" bg-blue-500 text-white px-6 py-2 rounded text-xl hover:brightness-105 transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
