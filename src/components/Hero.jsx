import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero_section_bg_video.mp4";

const Hero = () => {
  return (
    <section className='relative h-screen flex flex-col items-center justify-center text-white overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        className='absolute inset-0 w-full h-full object-cover z-0'
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <source src={heroVideo} type='video/mp4' />
      </video>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/40 z-[1]'></div>

      <div className='relative z-10 text-center px-4'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-[#fcf7e6]'
        >
          Bruma.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed text-[#fcf7e6]/90'
        >
          Experience the art of coffee. From the world's finest origins to your
          cup, we bring you a legacy of flavor, passion, and perfection.
        </motion.p>

        <div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center'>
          <motion.a
            href='#menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className='inline-block px-8 py-3 bg-white text-black font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gray-100 transition-colors duration-300'
          >
            EXPLORE OUR MENU
          </motion.a>
          <motion.a
            href='#visit'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className='inline-block px-8 py-3 bg-transparent text-white border-2 border-white font-medium text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-300'
          >
            VISIT US
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
