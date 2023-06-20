"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchHeaderOption() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const selectTab = (tab) => {
    router.push(`/search/${tab === "all" ? "web" : "image"}?search=${search}`);
  };

  return (
    <div className="flex items-center space-x-2 border-b w-full justify-center sm:justify-start lg:pl-52 text-gray-700 ">
      <div
        className={`${
          pathname === "/search/web" && "text-blue-600 border-blue-600"
        } flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}
        onClick={() => selectTab("all")}
      >
        <AiOutlineSearch className=" text-md" />
        <p>All</p>
      </div>
      <div
        className={`${
          pathname === "/search/image" && "text-blue-600 border-blue-600"
        } flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}
        onClick={() => selectTab("image")}
      >
        <p>Images</p>
      </div>
    </div>
  );
}

export default SearchHeaderOption;
