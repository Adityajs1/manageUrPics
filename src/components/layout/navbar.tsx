"use client";

import Link from "next/link";
import { Camera } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Upload", href: "/upload" },
  { name: "Categories", href: "/categories" },
  { name: "People", href: "/people" },
  { name: "Search", href: "/search" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl shadow-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-7 w-7 text-white" />
          <span className="text-2xl font-bold tracking-wide text-white">
            Snapic
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/80 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center rounded-full bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}