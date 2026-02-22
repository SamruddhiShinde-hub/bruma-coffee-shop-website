import React from "react";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='bg-[#1a1a1a] text-[#fdfaf6] py-16 px-8 border-t border-[#333]'>
      <div className='max-w-7xl mx-auto flex flex-col xl:flex-row justify-between gap-16 xl:gap-24'>
        {/* Left Side - Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='w-full xl:w-1/3'
        >
          <h3 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide sm:tracking-widest mb-6 text-white break-words'>
            BRUMA.
          </h3>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-sm'>
            Exceptional coffees crafted with passion. Dedicated to the craft,
            the community, and the perfect cup.
          </p>
          <div className='flex space-x-4'>
            <a
              href='#'
              className='text-gray-400 hover:text-[#d4b08c] transition-colors'
            >
              <Instagram size={24} />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-[#d4b08c] transition-colors'
            >
              <Twitter size={24} />
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-[#d4b08c] transition-colors'
            >
              <Facebook size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Links & Newsletter */}
        <div className='w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className='text-xl sm:text-2xl font-bold uppercase tracking-wide sm:tracking-widest mb-6 text-[#d4b08c]'>
              Explore
            </h4>
            <ul className='space-y-4 text-base sm:text-lg text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Our Story
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Shop Coffee
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Wholesale
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Locations
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className='text-xl sm:text-2xl font-bold uppercase tracking-wide sm:tracking-widest mb-6 text-[#d4b08c]'>
              Company
            </h4>
            <ul className='space-y-4 text-base sm:text-lg text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Press
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Sustainability
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='max-w-xs'
          >
            <h4 className='text-xl sm:text-2xl font-bold uppercase tracking-wide sm:tracking-widest mb-6 text-[#d4b08c]'>
              Newsletter
            </h4>
            <p className='text-gray-400 text-base sm:text-lg mb-6'>
              Subscribe for updates on new roasts and events.
            </p>
            <div className='flex'>
              <input
                type='email'
                placeholder='Email Address'
                className='bg-[#2c2c2c] text-white px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-[#d4b08c] rounded-l-md text-sm'
              />
              <button className='bg-[#d4b08c] px-4 py-3 text-[#1a1a1a] font-bold hover:bg-[#c4a47e] transition-colors rounded-r-md'>
                <Mail size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-24 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
        <p>
          &copy; {new Date().getFullYear()} Bruma Coffee. All rights reserved.
        </p>
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <a href='#' className='hover:text-white'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-white'>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
