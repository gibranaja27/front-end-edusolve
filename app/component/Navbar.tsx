"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-xl rounded-b-2xl">
      <div className="mx-auto px-4 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <img
          src="logo edusolve.png"
          alt="logo"
          className="w-24 md:w-36"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-20 text-purple-700 font-semibold text-lg">
          <li>
            <Link
              href="#"
              className="rounded-2xl border border-white px-5 py-3 font-sans hover:text-purple-600 hover:border-purple-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="rounded-2xl border border-white px-5 py-3 font-sans hover:text-purple-600 hover:border-purple-700"
            >
              Fitur
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="rounded-2xl border border-white px-5 py-3 font-sans hover:text-purple-600 hover:border-purple-700"
            >
              Testimoni
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="rounded-2xl border border-white px-5 py-3 font-sans hover:text-purple-600 hover:border-purple-700"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="bg-purple-700 text-white px-9 py-2 rounded-md text-md shadow-lg font-sans hover:bg-purple-600"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="bg-white text-purple-700 border border-purple-700 px-9 py-2 rounded-md text-md shadow-lg font-sans hover:border-purple-500 hover:text-purple-500"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-4xl text-purple-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 flex flex-col justify-center items-center font-sans font-semibold text-lg">
          <Link href="#" className="block text-purple-700">
            Home
          </Link>
          <Link href="#" className="block text-purple-700">
            Fitur
          </Link>
          <Link href="#" className="block text-purple-700">
            Testimoni
          </Link>
          <Link href="#" className="block text-purple-700">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
