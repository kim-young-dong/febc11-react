"use client";
import Link from "next/link";

export default function Pagination({ currentPage, totalPage }) {
  const pageItem = Array.from({ length: totalPage }, (_, item) => item + 1).map(
    (item) => {
      return (
        <li
          key={item}
          className={`font-bold ${item == currentPage ? "text-blue-700" : ""}`}
        >
          <Link href={`/info?page=${item}`}>{item}</Link>
        </li>
      );
    }
  );

  return <ul className="flex justify-center gap-3 m-4">{pageItem}</ul>;
}
