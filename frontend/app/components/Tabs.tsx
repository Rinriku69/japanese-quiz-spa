"use client";

import Link from "next/link";

export default function Tabs() {
  return (
    <nav className="border-b-2 border-slate-400 p-3 py-7 bg-[#093C5D]">
      <ul className="flex gap-20 pl-20">
        <li>
          <Link href="/quiz">
            <span className="nav-btn">Quiz</span>
          </Link>
        </li>
        <li>
          <Link href="/words">
            <span className="nav-btn">Word</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
