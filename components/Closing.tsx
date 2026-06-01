"use client"

import { motion, type Variants } from "framer-motion"

export default function ClosingSection() {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.section
      className="flex min-h-svh flex-col items-center justify-center gap-4 px-8 text-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      <motion.div variants={fadeUp}>
        <p className="text-center font-vibes text-6xl/14 text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Thank You
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex items-center justify-center gap-4"
      >
        <div className="h-px w-24 bg-[#F7E7A9]" />
        <span className="text-[#F7E7A9]">✦</span>
        <div className="h-px w-24 bg-[#F7E7A9]" />
      </motion.div>

      <motion.div variants={fadeUp} className="mx-4">
        <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          It would be our greatest joy to have your presence and blessings on
          this special day.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="mx-4">
        <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Thank you for being part of our journey and celebrating this beautiful
          moment with us.
        </p>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-10 font-montserrat text-sm font-medium tracking-wide text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
      >
        With Love
      </motion.p>

      <motion.div variants={fadeUp}>
        <p className="text-center font-vibes text-7xl text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Lizi & Arif
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex w-full max-w-sm items-center justify-between gap-1"
      >
        <div className="h-auto w-auto">
          <img
            src="/images/frame/Frame(1).png"
            alt="Bride"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="h-auto w-auto">
          <img
            src="/images/frame/Frame(2).png"
            alt="Groom"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
