import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section
      id='our-story'
      className='py-24 px-8 bg-[#fdfaf6] text-[#2c2c2c] overflow-hidden'
    >
      <div className='max-w-6xl mx-auto space-y-24'>
        {/* Part 1: Intro */}
        <div className='md:grid md:grid-cols-2 md:gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1a1a1a]'>
              Our Origins
            </h2>
            <p className='text-lg leading-relaxed text-[#5a5a5a]'>
              Born from a desire to redefine coffee culture, Jazean began not
              just as a roastery, but as a movement. We believe that every bean
              tells a story of the soil it grew in, the hands that engaged with
              it, and the journey it took to reach your cup. Our mission is
              simple yet profound: to honor these stories through meticulous
              roasting and thoughtful presentation.
            </p>
          </motion.div>
          <div className='hidden md:block relative h-96 w-full overflow-hidden rounded-lg'>
            <img
              src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Coffee Beans'
              className='absolute w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105'
            />
          </div>
        </div>

        {/* Part 2: Process - Alternating layout */}
        <div className='md:grid md:grid-cols-2 md:gap-16 items-center'>
          <div className='hidden md:block relative h-96 w-full overflow-hidden rounded-lg order-2 md:order-1'>
            <img
              src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              alt='Roasting Process'
              className='absolute w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105'
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='order-1 md:order-2'
          >
            <h2 className='text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1a1a1a]'>
              The Craft
            </h2>
            <p className='text-lg leading-relaxed text-[#5a5a5a]'>
              Roasting is an art of balance. Too light, and the potential is
              hidden; too dark, and the nuance is lost. We roast in small
              batches, carefully profiling each origin to highlight its unique
              character. From the bright, floral notes of Ethiopia to the deep,
              chocolaty tones of Brazil, we ensure every roast is a masterpiece
              of flavor.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
