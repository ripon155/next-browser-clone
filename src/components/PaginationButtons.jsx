"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function PaginationButtons() {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const search = searchParams.get("search");

  const startIndex = +searchParams.get("start") || 1;
  console.log();

  console.log(startIndex);
  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between ">
      {startIndex >= 10 && (
        <Link href={`${pathName}?search=${search}&start=${startIndex - 10}`}>
          <div className=" flex flex-col cursor-pointer items-center hover:underline ">
            <p className="h-5">Icon</p>
            <p className=" ">Previous</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link href={`${pathName}?search=${search}&start=${startIndex + 10}`}>
          <div className=" flex flex-col cursor-pointer items-center hover:underline ">
            <p className="h-5">Icon</p>
            <p className=" ">Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
