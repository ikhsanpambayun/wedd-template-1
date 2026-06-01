"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import SaveTheDateSection from "@/components/savethedate"
import Bride from "@/components/bride"
import Groom from "@/components/groom"
import RSVPSection from "@/components/rsvp"
import GallerySection from "@/components/gallery"
import GiftSection from "@/components/gift"
import ClosingSection from "@/components/Closing"
import { Button } from "@/components/ui/button"

import { EnvelopeIcon } from "@phosphor-icons/react"

export default function Page() {
  const images = [
    "/images/opening/Opening(1).jpg",
    "/images/opening/Opening(2).jpg",
    "/images/opening/Opening(3).jpg",
    "/images/opening/Opening(4).jpg",
    "/images/opening/Opening(5).jpg",
    "/images/opening/Opening(6).jpg",
    "/images/opening/Opening(7).jpg",
    "/images/opening/Opening(8).jpg",
    "/images/opening/Opening(9).jpg",
    "/images/opening/Opening(10).jpg",
  ]

  const [index, setIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    let loadedCount = 0

    images.forEach((src) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedCount += 1
        if (loadedCount === images.length) setIsLoaded(true)
      }
    })
  }, [])

  const handleClick = () => {
    if (isPlaying || !isLoaded) return

    setHasStarted(true)
    setIsPlaying(true)

    let current = 0

    const interval = setInterval(() => {
      setIndex(current)

      if (current >= images.length - 1) {
        clearInterval(interval)
        setIsPlaying(false)

        setTimeout(() => {
          setShowContent(true)
        }, 300)
      }

      current++
    }, 400)
  }

  const easing = [0.22, 1, 0.36, 1] as const

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
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
    <main className="relative min-h-svh w-full overflow-hidden">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/opening/Opening-bg.jpg")`,
        }}
      />
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${images[index]}")`,
        }}
      />
      {!hasStarted && (
        <div className="flex min-h-svh items-center justify-center">
          <Button
            onClick={handleClick}
            disabled={!isLoaded}
            className="text-md mt-60 rounded-full border-none bg-[#F7E7A9] px-8 py-5 text-[#8B5E3C] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] hover:bg-[#F3D98B]"
          >
            {!isLoaded ? (
              "Loading..."
            ) : (
              <span className="flex items-center gap-2">
                <EnvelopeIcon className="size-5" />
                Buka Undangan
              </span>
            )}
          </Button>
        </div>
      )}

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="inset-0 flex h-svh flex-col items-center pt-44 text-center text-white"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            <motion.p
              variants={fadeUp}
              className="font-montserrat text-sm font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
            >
              The Wedding Of
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-center font-vibes text-7xl text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
            >
              Lizi & Arif
            </motion.h1>

            <motion.div
              variants={zoomIn}
              className="mt-4 flex w-full max-w-sm items-center justify-between gap-1"
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

            <motion.div
              variants={fadeUp}
              className="mx-4 mt-6 rounded-full bg-black/15 px-6 py-2 shadow-xl backdrop-blur-xs"
            >
              <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                Makassar
                <br />
                26 January 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && <Bride />}

      {showContent && <Groom />}

      {showContent && <SaveTheDateSection />}

      {showContent && <GallerySection />}

      {showContent && <RSVPSection />}

      {showContent && <GiftSection />}

      {showContent && <ClosingSection />}
    </main>
  )
}
