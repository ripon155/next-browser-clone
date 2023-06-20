"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  // useEffect(() => {

  // })
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Something went wrong</h1>
      <button className=" text-blue-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
