"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "./ui/button"

export default function SaveTheDateSection() {
  const easing = [0.22, 1, 0.36, 1] as const

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  }

  const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: easing,
      },
    },
  }

  return (
    <motion.section
      className="relative flex min-h-svh w-full items-center justify-center text-center text-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }}
    >
      <motion.div
        variants={zoomIn}
        className="flex w-[82%] max-w-105 flex-col items-center justify-center rounded-2xl bg-black/10 px-6 py-10 shadow-xl backdrop-blur-xs"
      >
        <motion.p
          variants={fadeUp}
          className="font-vibes text-6xl/14 text-pink-100 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        >
          Save <br /> the Date
        </motion.p>

        <motion.div
          variants={zoomIn}
          className="flex items-center justify-center gap-4 py-2"
        >
          <div className="h-px w-24 bg-[#F7E7A9]" />
          <span className="text-[#F7E7A9]">✦</span>
          <div className="h-px w-24 bg-[#F7E7A9]" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-row items-center justify-center gap-2"
        >
          <div className="flex w-24 flex-col items-center justify-center gap-1">
            <div className="h-px w-24 bg-[#F7E7A9]/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
            <p className="text-md font-montserrat font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              January
            </p>
            <div className="h-px w-24 bg-[#F7E7A9]/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
          </div>
          <div className="flex flex-col items-center justify-center pb-3">
            <p className="font-montserrat text-lg font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Friday
            </p>
            <p className="font-vibes text-[72px] leading-15 font-bold text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              23
            </p>
          </div>
          <div className="flex w-24 flex-col items-center justify-center gap-1">
            <div className="h-px w-24 bg-[#F7E7A9]/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
            <p className="text-md font-montserrat font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              2026
            </p>
            <div className="h-px w-24 bg-[#F7E7A9]/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 grid w-full grid-cols-2 gap-6"
        >
          <div>
            <h3 className="font-vibes text-4xl text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Akad
            </h3>
            <p className="text-md font-montserrat font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              09.00 WIB
            </p>
          </div>

          <div>
            <h3 className="font-vibes text-4xl text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Reception
            </h3>
            <p className="text-md font-montserrat font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              10.00 WIB
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col">
          <h3 className="font-vibes text-5xl text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Location
          </h3>
          <h3 className="text-montserrat mt-4 text-lg font-bold tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            BALLARATE BALLROOM <br />
            HOTEL DALTON MAKASSAR
          </h3>
          <p className="font-montserrat text-sm text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            Jl. Perintis Kemerdekaan KM.16 No. 2, Kota Makassar
          </p>
          <Button className="mt-4 rounded-full border-none bg-[#F7E7A9] text-[#8B5E3C] shadow-xl hover:bg-[#F3D98B]">
            Open Google Maps
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
