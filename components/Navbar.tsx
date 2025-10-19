"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              className="h-8 w-8 group-hover:scale-110 transition-transform"
              src="/assets/logo.png"
              alt="logo"
              width={1000}
              height={1000}
            />
            <span className="text-xl font-bold text-gray-900">
              HomeTech Systems
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/works"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Works
            </Link>
            <Link
              href="/packages"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Packages
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/works"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Works
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
