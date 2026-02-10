"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center md:justify-start items-center">
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-lg"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
