import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich, bold, and smooth",
    price: "$3.50",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
  },
  {
    id: 2,
    name: "Cortado",
    description: "Equal parts espresso and steamed milk",
    price: "$4.50",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    id: 3,
    name: "Pour Over",
    description: "Single origin, hand-poured",
    price: "$5.00",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
  },
  {
    id: 4,
    name: "Flat White",
    description: "Velvety microfoam over double shot",
    price: "$5.00",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "18-hour slow steeped, served on ice",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
  },
  {
    id: 6,
    name: "Matcha Latte",
    description: "Ceremonial grade, oat milk",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
  },
];

const MenuSection = () => {
  const [hoveredItem, setHoveredItem] = useState(0);

  return (
    <section id='menu' className='py-8 md:py-12 lg:py-16 bg-[#fcf7e6]'>
      <div className='container mx-auto px-6 md:px-8'>
        <div className='text-center mb-6 md:mb-8'>
          <p className='text-xs tracking-[0.3em] text-[#a67c52] uppercase mb-2'>
            OUR SELECTION
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-serif font-bold text-[#2c2c2c] leading-none'>
            The Menu
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto items-center'>
          {/* Menu List - Left Side */}
          <div className='space-y-4 md:space-y-5'>
            {menuItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className='flex justify-between items-start border-b border-gray-300 pb-3 md:pb-4 cursor-pointer transition-all duration-300'
                onMouseEnter={() => setHoveredItem(index)}
              >
                <div className='flex-1'>
                  <h3
                    className={`text-lg md:text-xl font-serif font-bold mb-1 transition-colors duration-300 ${
                      hoveredItem === index
                        ? "text-[#a67c52]"
                        : "text-[#2c2c2c]"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p className='text-xs text-gray-600'>{item.description}</p>
                </div>
                <span className='text-base md:text-lg font-medium text-[#2c2c2c] ml-3 flex-shrink-0'>
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Image Stack - Right Side */}
          <div className='relative h-[320px] md:h-[360px] lg:h-[400px] hidden md:block z-0'>
            <div className='relative w-full h-full'>
              {menuItems.map((item, index) => {
                const offset = (menuItems.length - 1 - index) * 8;
                const isActive = hoveredItem === index;
                const isBelow = index < hoveredItem;

                return (
                  <motion.div
                    key={item.id}
                    className='absolute inset-0 rounded-2xl overflow-hidden shadow-2xl'
                    initial={false}
                    animate={{
                      y: isActive ? 0 : isBelow ? offset + 40 : offset,
                      scale: isActive
                        ? 1
                        : 0.95 - Math.abs(index - hoveredItem) * 0.02,
                      zIndex: isActive ? 50 : menuItems.length - index,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>
                    <div className='absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white'>
                      <h4
                        className='text-xl md:text-2xl font-serif font-bold mb-1 text-white'
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.9)" }}
                      >
                        {item.name}
                      </h4>
                      <p
                        className='text-xs font-medium'
                        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
