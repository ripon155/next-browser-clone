"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  return (
    <>
      <form className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className=" justify-start text-xl text-gray-500 " />
        <input type="text" className=" flex-grow focus:outline-none" />
        <BsFillMicFill className="text-lg  " />
      </form>
    </>
  );
}

export default HomeSearch;
