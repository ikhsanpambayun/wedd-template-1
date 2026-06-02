"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "./ui/button"

export default function GiftSection() {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text)
    alert("Copied to clipboard")
  }

  return (
    <motion.section
      className="flex min-h-lvh flex-col items-center justify-center gap-4 px-6 py-50"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-center font-vibes text-6xl/14 text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
      >
        Wedding Gift
      </motion.h2>

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
          Your prayers and blessings are the greatest gift for us. Should you
          wish to express your kindness, you may do so through the QRIS below.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex w-full flex-col gap-6 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md"
      >
        <h3 className="text-center font-vibes text-5xl text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Qris
        </h3>

        <div className="flex justify-center">
          <div className="rounded-2xl bg-white p-2 shadow-xl">
            <img src="/images/QR.png" alt="QRIS" className="w-48" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex w-full flex-col gap-4 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md"
      >
        <h3 className="text-center font-vibes text-5xl text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
          Send a Gift
        </h3>

        <p className="text-center text-sm leading-relaxed text-white/80">
          Jl. Perintis Kemerdekaan KM.16 No. 2
          <br />
          Kota Makassar, Sulawesi Selatan
        </p>

        <Button
          onClick={() =>
            copyText(
              "Jl. Perintis Kemerdekaan KM.16 No. 2 Kota Makassar Sulawesi Selatan"
            )
          }
          className="rounded-full bg-[#F7E7A9] text-[#8B5E3C] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] hover:bg-[#F3D98B]"
        >
          Copy Address
        </Button>
      </motion.div>
    </motion.section>
  )
}
