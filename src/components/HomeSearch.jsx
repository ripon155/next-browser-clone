"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    router.push(`/search/web?search=${input}`);
  };

  const randomSearch = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    router.push(`/search/web?search=${response}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className=" justify-start text-xl text-gray-500 " />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className=" flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg  " />
      </form>
      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn">
          I am feeling lucky
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
