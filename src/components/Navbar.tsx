"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020202]/85 backdrop-blur-md transition-shadow duration-500 shadow-none">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="font-mono flex shrink-0 items-center text-3xl font-bold tracking-tight hover:text-blue-500 text-white/90"
          href="/#"
        >
          &lt;Sajeeb/&gt;
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-sm lg:flex">
          {menuItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={index}
                className={`whitespace-nowrap py-1 text-white transition-opacity hover:opacity-200 ${isActive ? "opacity-200" : "opacity-65"}`}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <button className="text-sm font-medium text-white/70 transition-colors hover:text-white cursor-pointer">
            Sign In
          </button>
          <Link
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow-[0_2px_10px_-4px_rgba(37,99,235,0.35)] transition-colors hover:bg-blue-700"
            href="/#courses"
          >
            Browse Courses
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-white/80 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu size-5"
            aria-hidden="true"
          >
            <path d="M4 5h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 19h16"></path>
          </svg>
        </button>
      </div>

      <div className="border-t border-white/10 bg-[#020202] px-4 py-4 lg:hidden">
        <nav className="flex flex-col gap-1 text-sm text-white/70">
          {menuItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={index}
                className={`rounded-lg px-2 py-2.5 transition-colors hover:bg-white/5 hover:text-white ${isActive ? "bg-white/5 text-white" : ""}`}
                href="/#"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
          <button className="text-sm font-medium text-white/70 cursor-pointer">
            Sign In
          </button>
          <Link
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow-[0_2px_10px_-4px_rgba(37,99,235,0.35)] transition-colors hover:bg-blue-700 ml-auto"
            href="/#courses"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
