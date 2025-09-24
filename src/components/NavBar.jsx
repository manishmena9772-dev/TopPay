"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBarHome() {
  const [isMenuShow, setShow] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/" },
    // { name: "Contact Us", href: "/" },
    // { name: "WhatsApp", href: "/" },
    // { name: "Login", href: "/" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 bg-white left-0 z-50 shadow-sm  sticky top-0 left-0">
        <nav className="flex items-center justify-between w-full max-w-[1250px] min-h-[70px] px-5 mx-auto sm:min-h-[120px]">
          {/* Logo */}
          <h3 className="font-hind-siliguri text-[24px] sm:text-5xl font-[700]">Top Pay</h3>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-lg font-medium group sm:text-2xl"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            {isMenuShow ? (
              <X
                onClick={() => setShow(false)}
                className="w-[32px] h-[32px] cursor-pointer transition-transform duration-200 hover:rotate-90"
              />
            ) : (
              <Menu
                onClick={() => setShow(true)}
                className="w-[32px] h-[32px] cursor-pointer transition-transform duration-200 hover:scale-110"
              />
            )}
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuShow && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-end px-5 py-3 bg-white"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setShow(false)}
                  className="text-lg py-2 px-3 w-full text-right hover:bg-gray-100 rounded-md transition underline"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Padding to avoid content hiding behind fixed header */}
      <div className="pt-[20px]"></div>
    </>
  );
}
