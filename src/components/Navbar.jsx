import React, { useState, useEffect } from "react";
import { Menu, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should show the "dark" (scrolled/hovered) style
  // On non-home pages, always show dark style. On home page, follow scroll/hover logic.
  const showDarkStyle = !isHome || isScrolled || isHovered;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 ${
        showDarkStyle
          ? "bg-[#fcf7e6] shadow-md border-b border-gray-200"
          : "bg-transparent border-b border-white/20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Link
            to='/'
            className={`text-2xl font-serif font-bold tracking-widest uppercase transition-colors ${
              showDarkStyle ? "text-[#2c2c2c]" : "text-white"
            }`}
          >
            Bruma.
          </Link>
        </div>

        <div
          className={`hidden md:flex space-x-8 text-sm font-medium tracking-wide transition-colors ${
            showDarkStyle ? "text-[#5a5a5a]" : "text-white/90"
          }`}
        >
          <a
            href='/#menu'
            className='hover:text-[#a67c52] transition-colors duration-300'
          >
            MENU
          </a>
          <a
            href='/#products'
            className='hover:text-[#a67c52] transition-colors duration-300'
          >
            PRODUCTS
          </a>
          <Link
            to='/about'
            className='hover:text-[#a67c52] transition-colors duration-300'
          >
            ABOUT
          </Link>
          <a
            href='/#visit'
            className='hover:text-[#a67c52] transition-colors duration-300'
          >
            VISIT US
          </a>
        </div>

        <div className='flex items-center space-x-6'>
          <button
            className={`md:hidden transition-colors duration-300 ${
              showDarkStyle
                ? "text-[#5a5a5a] hover:text-[#a67c52]"
                : "text-white/90 hover:text-white"
            }`}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
