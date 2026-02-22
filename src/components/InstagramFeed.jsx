import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    likes: 324,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    likes: 412,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    likes: 567,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    likes: 289,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    likes: 445,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    likes: 378,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&q=80",
    likes: 501,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    likes: 623,
  },
];

const InstagramFeed = () => {
  return (
    <section className='py-8 md:py-12 lg:py-14 bg-[#fcf7e6]'>
      <div className='container mx-auto px-6 md:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-4 md:mb-6'
        >
          <p className='text-xs tracking-[0.3em] text-[#a67c52] uppercase mb-1'>
            Follow Us
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2c2c2c] mb-2 md:mb-3'>
            @bruma.coffee
          </h2>
          <a
            href='https://instagram.com/bruma.coffee'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-[#a67c52] hover:text-[#2c2c2c] transition-colors duration-300'
          >
            <Instagram size={16} />
            <span className='text-xs tracking-wide'>Follow on Instagram</span>
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-7xl mx-auto'>
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href='https://instagram.com/bruma.coffee'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className='group relative aspect-square overflow-hidden rounded-md bg-gray-200'
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />

              {/* Overlay on hover */}
              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <div className='flex items-center gap-2 text-white'>
                  <Instagram size={18} />
                  <span className='text-sm md:text-base font-medium'>
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center mt-4 md:mt-6'
        >
          <a
            href='https://instagram.com/bruma.coffee'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-6 md:px-8 py-2 md:py-2.5 bg-[#2c2c2c] text-white font-medium text-xs tracking-widest uppercase rounded-full hover:bg-[#a67c52] transition-colors duration-300'
          >
            View More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
