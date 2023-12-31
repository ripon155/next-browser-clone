"use client";

import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

function WebSearchResults({ results }) {
  console.log(results);
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl[14%] lg:pl-52">
      <p className=" text-gray-500 text-sm mb-5 mt-3">
        About {results?.searchInformation?.totalResults} results (
        {results?.searchInformation?.searchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div className=" mb-8 max-w-xl" key={result.link}>
          <div className=" group flex flex-col">
            <Link className="text-sm truncate " href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className=" group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className=" text-gray-600">{Parser(result.snippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default WebSearchResults;
