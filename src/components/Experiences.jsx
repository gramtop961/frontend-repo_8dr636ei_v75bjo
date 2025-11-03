import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Compass, Car, Star } from 'lucide-react';

const experiences = [
  {
    title: 'Signature Game Drives',
    icon: Car,
    desc: 'Twice-daily guided drives in open 4x4s, tracking the Big Five across golden plains and acacia woodlands.',
    image:
      'https://images.unsplash.com/photo-1539695914234-33a2d7b4e81a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Photographic Safaris',
    icon: Camera,
    desc: 'Private photographic sessions with pro guides, custom gimbal mounts, and golden-hour positioning.',
    image:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Walking Trails & Tracking',
    icon: Compass,
    desc: 'Slow safari on foot, reading tracks, bird calls, and subtle signs for a deeper connection to the wild.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative w-full bg-[#0D0D0D] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-geist text-3xl md:text-5xl">Wildlife & Safaris</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Unforgettable encounters crafted with comfort and conservation at heart.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-400">
            <Star className="h-5 w-5 fill-amber-400" />
            <span className="text-sm text-white/70">Conservation First</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="rounded-full bg-white/10 p-2 backdrop-blur">
                    <exp.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-white/75">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6 text-center md:flex-row md:text-left"
        >
          <div>
            <h4 className="text-xl">Design your private itinerary</h4>
            <p className="mt-1 text-white/70">
              Bespoke drives, candlelit bush dinners, hot-air balloons, and more.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Enquire Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
