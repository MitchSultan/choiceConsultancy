"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Replace with your actual logo */}
              <Image src="/images/logoo.svg" alt="Justareal Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/invest" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Invest
              </Link>
              <Link
                href="/blog" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/invest" 
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Invest
          </Link>
          <Link 
            href="/blog" 
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}