"use client";

import { useSearchParams } from "next/navigation";
function WebSearch() {
  const searchParams = useSearchParams();

  console.log(searchParams.get("search"));

  return <div>WebSearch</div>;
}

export default WebSearch;
