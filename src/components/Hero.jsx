import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for luxury glow (non-interactive so Spline stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/80 backdrop-blur"
        >
          Luxury Safari • Africa
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-geist mb-4 text-4xl leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Savanna Royale Lodge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto max-w-2xl text-base text-white/80 md:text-lg"
        >
          Where untamed wilderness meets timeless elegance. Private safaris, curated cuisine, and cinematic sunsets over the savanna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#accommodations"
            className="group rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow/40 shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Suites
          </a>
          <a
            href="#experiences"
            className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Safari Experiences
          </a>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="pointer-events-none mt-10 grid grid-cols-2 gap-3 text-left text-xs text-white/80 sm:grid-cols-4"
        >
          {[
            'Private Game Drives',
            'Signature Bush Dinners',
            'Spa & Wellness Pavilion',
            'Airstrip Transfers',
          ].map((label) => (
            <div key={label} className="rounded-md border border-white/15 bg-white/5 px-3 py-2 backdrop-blur">
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
