import React from "react"

import { AnimatePresence, motion, type Variants } from "framer-motion"
import { InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

const Groom = () => {
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
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: easing,
      },
    },
  }

  const zoomIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: easing,
      },
    },
  }
  return (
    <motion.section
      className="relative flex min-h-lvh w-full flex-col items-center justify-center text-center text-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.6,
      }}
    >
      <motion.div variants={zoomIn} className="w-58">
        <img
          src="/images/frame/Frame(2).png"
          alt="Groom Frame"
          className="h-auto w-full"
        />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="pt-10 text-center font-vibes text-5xl leading-none text-pink-100 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
      >
        Andi M. Arif R.
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="mt-4 rounded-full bg-black/15 px-6 py-2 shadow-xl backdrop-blur-xs"
      >
        <p className="font-montserrat text-sm text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          The Beloved Son of
        </p>
        <p className="max-w-xs font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Mr. Andi Bahri & Mrs. Andi Nurpancasari
        </p>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-5 mb-20 flex items-center justify-center gap-6 text-[#FFF8F2]"
      >
        <InstagramLogoIcon
          weight="fill"
          className="h-10 w-10 p-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        />
        <LinkedinLogoIcon
          weight="fill"
          className="h-10 w-10 p-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        />
      </motion.p>
    </motion.section>
  )
}

export default Groom
