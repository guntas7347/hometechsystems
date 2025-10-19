import { Instagram, Phone, Mail, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                className="h-8 w-8 filter invert brightness-0"
                src="/assets/logo.png"
                alt="logo"
                width={1000}
                height={1000}
              />
              <span className="text-xl font-bold">HomeTech Systems</span>
            </div>
            <p className="text-gray-400 text-sm">
              Securing homes with cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-white text-sm transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white text-sm transition"
              >
                About
              </Link>
              <Link
                href="/works"
                className="block text-gray-400 hover:text-white text-sm transition"
              >
                Works
              </Link>
              <Link
                href="/packages"
                className="block text-gray-400 hover:text-white text-sm transition"
              >
                Packages
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white text-sm transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>CCTV Systems</p>
              <p>Security Alarms</p>
              <p>Home Automation</p>
              <p>AV Distribution</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (778)-833-4133</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hometechsystemsltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/hometech_systems_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  @hometechsystems
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <a
                  href="https://guntassandhu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Developer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 HomeTech Systems. All rights reserved. Managing</p>
        </div>
      </div>
    </footer>
  );
}
