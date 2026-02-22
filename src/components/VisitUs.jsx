import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const locations = [
  {
    id: 1,
    city: "Seattle",
    address: "123 Coffee Lane, Brew District",
    zip: "WA 98101",
    phone: "+1 (555) 123-4567",
    email: "seattle@bruma.com",
    hours: "Mon-Sun: 7am - 7pm",
    coordinates: { lat: 47.6143, lng: -122.3399 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.615998634863!2d-122.3399672235794!3d47.61430997119077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab450a80e4b%3A0xe53be0a3b6807d4b!2sStarbucks%20Reserve%20Roastery!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus",
  },
];

const VisitUs = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <section
      id='visit'
      className='py-12 md:py-16 lg:py-20 flex items-center bg-[#fcf7e6] text-[#2c2c2c] relative overflow-hidden'
    >
      <div className='container mx-auto px-6 md:px-8 lg:px-10 h-full flex flex-col justify-center'>
        {/* Header Area */}
        <div className='mb-6 md:mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#a67c52]/20 pb-6 md:pb-7'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className='text-xs md:text-sm tracking-[0.3em] text-[#a67c52] uppercase mb-2 md:mb-3 font-medium'>
              Our Locations
            </p>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2c2c2c] leading-[0.9]'>
              Find Your
              <br />
              <span className='italic text-[#a67c52]'>Sanctuary.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-md block'
          >
            <p className='text-sm md:text-base text-[#5a5a5a] font-light leading-relaxed'>
              More than just coffee shops, our spaces are designed for pause,
              conversation, and inspiration. Come say hello.
            </p>
          </motion.div>
        </div>

        {/* Unique Interactive Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] h-auto lg:h-[50vh]'>
          {/* Location List Panel */}
          <motion.div
            className='lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-white/60 backdrop-blur-sm p-6 md:p-7 lg:p-6 rounded-2xl lg:rounded-3xl border border-[#a67c52]/10 shadow-sm order-1 lg:order-1'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='space-y-4 md:space-y-5'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <div className='w-2 h-2 rounded-full bg-[#a67c52] animate-pulse'></div>
                  <span className='text-xs font-bold tracking-widest uppercase text-[#a67c52]'>
                    Open Now
                  </span>
                </div>
                <h3 className='text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-serif font-bold mb-2'>
                  {activeLocation.city}
                </h3>
                <p className='text-[#5a5a5a] text-sm md:text-base font-light leading-relaxed'>
                  {activeLocation.address}
                </p>
                <p className='text-[#5a5a5a] text-sm md:text-base font-light'>
                  {activeLocation.zip}
                </p>
              </div>

              <div className='space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-[#a67c52]/10'>
                <div className='flex items-start gap-3'>
                  <Clock
                    className='mt-0.5 text-[#a67c52] flex-shrink-0'
                    size={18}
                  />
                  <div>
                    <p className='font-bold text-[#2c2c2c] mb-1 text-sm'>
                      Store Hours
                    </p>
                    <p className='text-[#5a5a5a] text-xs md:text-sm leading-relaxed'>
                      {activeLocation.hours}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Phone
                    className='mt-0.5 text-[#a67c52] flex-shrink-0'
                    size={18}
                  />
                  <div>
                    <p className='font-bold text-[#2c2c2c] mb-1 text-sm'>
                      Contact
                    </p>
                    <p className='text-[#5a5a5a] text-xs md:text-sm leading-relaxed'>
                      {activeLocation.phone}
                    </p>
                    <a
                      href={`mailto:${activeLocation.email}`}
                      className='text-[#a67c52] hover:underline mt-1 block text-xs md:text-sm break-all'
                    >
                      {activeLocation.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 md:mt-5 pt-3 md:pt-4'>
              <button className='group w-full py-3 bg-[#2c2c2c] text-[#fcf7e6] rounded-full font-medium text-sm tracking-wide transition-all hover:bg-[#a67c52] hover:shadow-lg flex items-center justify-center gap-2'>
                <span>GET DIRECTIONS</span>
                <ArrowUpRight
                  size={18}
                  className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                />
              </button>
            </div>
          </motion.div>

          {/* Map Area */}
          <motion.div
            className='lg:col-span-7 xl:col-span-8 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-auto min-h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl order-2 lg:order-2'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src={activeLocation.mapUrl}
              width='100%'
              height='100%'
              style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:filter-none'
              title='Location Map'
            ></iframe>

            {/* Decorative Overlay */}
            <div className='absolute inset-0 border-[12px] border-[#fcf7e6]/30 pointer-events-none z-10 rounded-3xl'></div>

            {/* Floating Label */}
            <div className='absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-[#fcf7e6] px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg z-20 flex items-center gap-2'>
              <MapPin
                size={14}
                className='text-[#a67c52] sm:w-[16px] sm:h-[16px]'
                fill='#a67c52'
              />
              <span className='font-serif font-bold text-[#2c2c2c] text-xs sm:text-sm'>
                Brew District
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
