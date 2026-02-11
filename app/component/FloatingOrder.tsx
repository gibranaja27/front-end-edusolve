"use client";

import Link from "next/link";

export default function FloatingOrder() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Icon bulat */}
      <div
        className="w-20 h-20 bg-red-50 rounded-full shadow-xl 
                      flex items-center justify-center text-2xl animate-bounce"
      >
        <img src="icon-fixed.png" alt="logofloating" className="w-14 h-14"/>
      </div>

      {/* Button */}
      <Link
        href="/register"
        className="bg-purple-700 hover:bg-purple-600 
                   text-white
                   text-sm
                   px-6 py-3 
                   rounded-full 
                   shadow-2xl 
                   font-bold 
                   transition 
                   duration-300 
                   hover:scale-105"
      >
        Daftar Sekarang!
      </Link>
    </div>
  );
}
