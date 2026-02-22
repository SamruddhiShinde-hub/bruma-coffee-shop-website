import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Al Riyah Mountain",
    origin: "Yemen",
    type: "SPECIALTY COFFEE",
    subtitle: "ESPRESSO & FILTER",
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=800&q=80",
    label:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
  },
  {
    id: 2,
    name: "Ethiopian Sidamo",
    origin: "Ethiopia",
    type: "SPECIALTY COFFEE",
    subtitle: "ESPRESSO & FILTER",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    label:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
  },
  {
    id: 3,
    name: "Colombian Reserve",
    origin: "Colombia",
    type: "SPECIALTY COFFEE",
    subtitle: "ESPRESSO & FILTER",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    label:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    id: 4,
    name: "Sumatra Dark",
    origin: "Indonesia",
    type: "SPECIALTY COFFEE",
    subtitle: "ESPRESSO & FILTER",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    label:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
  },
  {
    id: 5,
    name: "Kenya AA+",
    origin: "Kenya",
    type: "SPECIALTY COFFEE",
    subtitle: "ESPRESSO & FILTER",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
    label:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  },
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      visible.push({ ...products[index], offset: i });
    }
    return visible;
  };

  return (
    <section
      id='products'
      className='py-10 md:py-14 lg:py-16 bg-[#fcf7e6] text-white relative overflow-hidden'
    >
      <div className='container mx-auto px-8 mb-6 md:mb-10 text-center'>
        <p className='text-xs tracking-[0.3em] text-[#a67c52] uppercase mb-2'>
          Some of the world&apos;s finest Arabica beans in the palm of your
          hand.
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-serif font-bold text-[#2c2c2c] leading-none'
        >
          Explore Our Products
        </motion.h2>
      </div>

      <div className='relative h-[420px] md:h-[470px] lg:h-[500px] flex items-center justify-center'>
        {/* Products Carousel */}
        <div className='relative w-full h-full flex items-center justify-center'>
          {getVisibleProducts().map((product, idx) => {
            const isCenter = product.offset === 0;
            const position = product.offset * 380;

            return (
              <motion.div
                key={product.id}
                className='absolute'
                initial={false}
                animate={{
                  x: position,
                  scale: isCenter ? 1 : 0.75,
                  opacity: isCenter ? 1 : 0.4,
                  filter: isCenter ? "blur(0px)" : "blur(4px)",
                  zIndex: isCenter ? 20 : 10 - Math.abs(product.offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ width: "350px" }}
              >
                <div className='bg-[#f5ede3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200'>
                  {/* Product Image */}
                  <div className='relative h-64 md:h-72 lg:h-80 overflow-hidden'>
                    <img
                      src={product.label}
                      alt={product.name}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Product Info */}
                  <div className='p-4 md:p-5 text-center bg-[#f5ede3]'>
                    <span className='text-[10px] md:text-xs tracking-[0.3em] text-[#a67c52] uppercase block mb-1 md:mb-1.5'>
                      {product.type}
                    </span>
                    <h3 className='text-lg md:text-xl font-serif font-bold mb-1 text-black'>
                      {product.name}
                    </h3>
                    <p className='text-xs md:text-sm text-gray-600 mb-2'>
                      {product.subtitle}
                    </p>
                    <p className='text-xs tracking-widest text-gray-500 uppercase'>
                      {product.origin}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className='absolute left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center hover:scale-110 transition-all duration-300'
        >
          <ChevronLeft
            className='text-[#4A3728] drop-shadow-lg'
            size={48}
            strokeWidth={2.5}
          />
        </button>

        <button
          onClick={handleNext}
          className='absolute right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center hover:scale-110 transition-all duration-300'
        >
          <ChevronRight
            className='text-[#4A3728] drop-shadow-lg'
            size={48}
            strokeWidth={2.5}
          />
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
