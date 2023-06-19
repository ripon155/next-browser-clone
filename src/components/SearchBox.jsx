"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function SearchBox() {
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("search");

  const router = useRouter();

  const [term, setTerm] = useState(searchTerm);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?search=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex border border-gray-200 rounded-full shadow-lg px-6 py-3 items-center flex-grow max-w-3xl ml-10"
    >
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text"
        className="w-full focus:outline-none "
      />
      <RxCross2
        onClick={() => setTerm("")}
        className=" text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl pl-4 border-l-2 border-gray-300 mr-2" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="text-2xl hidden sm:inline-flex cursor-pointer"
      />
    </form>
  );
}

export default SearchBox;
