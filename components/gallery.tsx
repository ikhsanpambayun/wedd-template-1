"use client"

import { motion, type Variants } from "framer-motion"

export default function GallerySection() {
  const images = [
    "/images/frame/Frame(5).png",
    "/images/frame/Frame(6).png",
    "/images/frame/Frame(3).png",
    "/images/frame/Frame(4).png",
    "/images/frame/Frame(7).png",
  ]

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative min-h-svh py-50">
      <motion.div
        className="mx-auto max-w-md"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
      >
        <motion.p
          variants={item}
          className="text-center font-vibes text-6xl/14 text-pink-100 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        >
          Our Gallery
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 py-4"
        >
          <div className="h-px w-24 bg-[#F7E7A9]" />
          <span className="text-[#F7E7A9]">✦</span>
          <div className="h-px w-24 bg-[#F7E7A9]" />
        </motion.div>

        <motion.div
          variants={item}
          className="mx-4 rounded-full bg-black/15 px-6 py-2 backdrop-blur-xs"
        >
          <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Every picture tells a story, every moment becomes a memory.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 content-around">
          {images.map((image, index) => (
            <motion.div
              key={image}
              variants={item}
              className={`flex justify-center overflow-hidden ${
                index === 2 ? "col-span-2 aspect-2/1" : "aspect-auto"
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-auto w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
