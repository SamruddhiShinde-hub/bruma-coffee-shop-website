import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "1998",
    title: "Origins",
    description:
      "In the misty highlands of Ethiopia, our journey began with a single family farm dedicated to preserving ancient coffee varieties.",
    image:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80",
  },
  {
    year: "2005",
    title: "The Roast",
    description:
      "Bringing the beans to Seattle, we opened our first roastery, focusing on small-batch artisan techniques that honor the bean's character.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800",
  },
  {
    year: "2012",
    title: "Community",
    description:
      "Our first cafe opened its doors, becoming a sanctuary for locals to gather, work, and share moments over the perfect cup.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    year: "2020",
    title: "Sustainability",
    description:
      "Launch of our direct trade initiative, ensuring 100% transparency and fair wages for every farmer we partner with across the globe.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
  },
  {
    year: "Present",
    title: "The Future",
    description:
      "Expanding our digital presence and home brewing education, bringing the cafe experience to kitchens worldwide.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative z-10 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Side */}
      <div
        className={`w-full md:w-5/12 bg-[#fcf7e6]/80 backdrop-blur-sm md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none relative z-10 text-center md:text-left ${
          isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
        }`}
      >
        <motion.span
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-7xl font-serif text-[#a67c52] font-bold block mb-4'
        >
          {item.year}
        </motion.span>
        <motion.h3 className='text-4xl font-serif font-bold text-[#2c2c2c] mb-6'>
          {item.title}
        </motion.h3>
        <motion.p className='text-[#5a5a5a] text-lg leading-relaxed font-light'>
          {item.description}
        </motion.p>
      </div>

      {/* Center Group - The Dot */}
      <div className='relative md:absolute left-auto md:left-1/2 top-auto md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center pointer-events-none pb-8 md:pb-0'>
        <motion.div
          style={{ scale: scrollYProgress }}
          className='w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#fcf7e6] border-[4px] md:border-[6px] border-[#a67c52] shadow-xl z-20 pointer-events-auto'
        />
      </div>

      {/* Image Side */}
      <div className='w-full md:w-5/12'>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] group cursor-pointer ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
        >
          <div className='absolute inset-0 bg-[#a67c52]/10 group-hover:bg-transparent transition-colors duration-500 z-10'></div>
          <motion.img
            src={item.image}
            alt={item.title}
            className='w-full h-full object-cover'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='bg-[#fcf7e6] min-h-screen pt-40 pb-32 px-4 md:px-8 overflow-hidden'>
      {/* Header */}
      <div className='max-w-4xl mx-auto text-center mb-32 relative z-10'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-sm tracking-[0.3em] text-[#a67c52] uppercase mb-6 font-medium'
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='text-6xl md:text-8xl font-serif font-bold text-[#2c2c2c] mb-8'
        >
          A Legacy found in <br />
          <span className='italic text-[#a67c52]'>every cup.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='text-xl text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed font-light'
        >
          From the steep slopes of distant mountains to the warmth of your
          morning ritual, this is how Bruma came to be.
        </motion.p>
      </div>

      {/* Timeline Section */}
      <div
        ref={containerRef}
        className='relative max-w-7xl mx-auto pl-0 md:pl-0'
      >
        {/* Animated Vertical Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#e5dcc5] rounded-full overflow-hidden'>
          <motion.div
            style={{ scaleY, originY: 0 }}
            className='w-full h-full bg-[#a67c52]'
          />
        </div>

        <div className='space-y-32 md:space-y-64 pb-32'>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
