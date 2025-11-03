import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const accomodations = [
  {
    name: 'Savanna Villas',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    desc:
      'Expansive two-bedroom villas with private plunge pools, butler service, and panoramic savanna views.',
    perks: ['Private Pool', 'Butler Service', 'Sunset Deck'],
  },
  {
    name: 'Tented Suites',
    image:
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1600&auto=format&fit=crop',
    desc:
      'Elevated canvas suites blending modern comforts with the romance of classic expedition-style living.',
    perks: ['King Bed', 'Outdoor Shower', 'Stargazing'],
  },
  {
    name: 'Horizon Residences',
    image:
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1600&auto=format&fit=crop',
    desc:
      'Ultra-private residences ideal for families or small groups seeking complete seclusion and service.',
    perks: ['Private Chef', 'Lounge & Bar', 'Concierge'],
  },
];

export default function Accommodations() {
  return (
    <section id="accommodations" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-geist text-3xl md:text-5xl">Accommodations</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Three distinct sanctuaries designed for indulgence in the wild.
            </p>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
            <span className="ml-2 text-sm text-white/70">Awarded for Excellence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {accomodations.map((item, idx) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.perks.map((perk) => (
                    <span
                      key={perk}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
