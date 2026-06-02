"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { EnvelopeIcon } from "@phosphor-icons/react"

import SaveTheDateSection from "@/components/savethedate"
import Bride from "@/components/bride"
import Groom from "@/components/groom"
import RSVPSection from "@/components/rsvp"
import GallerySection from "@/components/gallery"
import GiftSection from "@/components/gift"
import ClosingSection from "@/components/Closing"
import { Button } from "@/components/ui/button"

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
    <main className="min-h-screen">
      <div className="flex min-h-screen justify-end">
        {/* Left Desktop Area */}
        <div className="relative hidden flex-1 overflow-hidden sm:block">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(
                rgba(0,0,0,0.45),
                rgba(0,0,0,0.45)
              ),
              url("/images/Desktop-bg.jpg")
            `,
              backgroundRepeat: "repeat",
              backgroundSize: "220px",
            }}
          />

          {/* Optional Branding Area */}
          <div className="inset-0 hidden flex-col items-center justify-center text-center text-white md:absolute md:flex">
            <p className="font-montserrat text-sm font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              The Wedding Of
            </p>

            <h1 className="mt-4 font-vibes text-7xl text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              Lizi & Arif
            </h1>

            <div className="mx-4 mt-10 rounded-full bg-black/15 px-6 py-2 shadow-xl backdrop-blur-xs">
              <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                Makassar, 26 January 2026
              </p>
            </div>
          </div>
        </div>

        {/* Wedding Panel */}
        <div className="relative h-svh w-full sm:aspect-[390/844] sm:h-screen sm:w-auto">
          {/* Fixed Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/images/opening/Opening-bg.jpg")',
              }}
            />

            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${images[index]}")`,
              }}
            />
          </div>

          {/* Scroll Area */}
          <div className="relative z-20 h-full [scrollbar-width:none] overflow-x-hidden overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
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
                <>
                  <motion.div
                    className="flex min-h-svh flex-col items-center pt-44 text-center text-white"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.p
                      variants={fadeUp}
                      className="font-montserrat text-sm font-medium tracking-wide text-[#FFF8F2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                    >
                      The Wedding Of
                    </motion.p>

                    <motion.h1
                      variants={fadeUp}
                      className="mt-4 font-vibes text-7xl text-pink-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                    >
                      Lizi & Arif
                    </motion.h1>

                    <motion.div
                      variants={zoomIn}
                      className="mt-10 flex w-full max-w-sm items-center justify-between gap-1"
                    >
                      <img
                        src="/images/frame/Frame(1).png"
                        alt="Bride"
                        className="h-auto w-auto object-cover"
                      />

                      <img
                        src="/images/frame/Frame(2).png"
                        alt="Groom"
                        className="h-auto w-auto object-cover"
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="mx-4 mt-15 rounded-full bg-black/15 px-6 py-2 shadow-xl backdrop-blur-xs"
                    >
                      <p className="max-w-xs text-center font-montserrat text-sm leading-relaxed text-[#FFF8F2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                        Makassar, 26 January 2026
                      </p>
                    </motion.div>
                  </motion.div>

                  <Bride />
                  <Groom />
                  <SaveTheDateSection />
                  <GallerySection />
                  <RSVPSection />
                  <GiftSection />
                  <ClosingSection />
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}
