"use client"
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex fixed top-0 z-10 bg-transparent w-full p-4 justify-between items-center">
      <Image
        src="/navber.png"
        alt="Thetigerteamfoundation technology"
        height={60}
        width={140}
      />

      {/* Menu for larger screens */}
      <div className="hidden md:flex gap-10 text-white items-center">
        <Link href="/" className="hover:text-orange-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-orange-400">
          About
        </Link>
        <Link href="/services" className="hover:text-orange-400">
          Services
        </Link>
        <Link href="/contact" className="hover:text-orange-400">
          Contact
        </Link>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="flex justify-end sm:hidden">
        <button onClick={toggleMenu}>
          <RxHamburgerMenu color="white" size={40} />
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 bg-transparent w-full flex flex-col gap-4 p-4 text-white sm:hidden">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/" className="hover:text-orange-400">
            About
          </Link>
          <Link href="/" className="hover:text-orange-400">
            Services
          </Link>
          <Link href="/" className="hover:text-orange-400">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
