import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h5 className="text-lg">Savanna Royale Lodge</h5>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              An intimate luxury lodge celebrating Africa’s wilderness with refined hospitality and a dedication to conservation.
            </p>
          </div>
          <div>
            <h6 className="text-sm uppercase tracking-widest text-white/60">Contact</h6>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              <li>Reservations: reservations@savannaroyale.africa</li>
              <li>Concierge: +27 (0)21 555 0101</li>
              <li>Airstrip Coordinates: -1.406, 35.035</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm uppercase tracking-widest text-white/60">Visit</h6>
            <ul className="mt-3 space-y-1 text-sm text-white/80">
              <li><a href="#accommodations" className="hover:underline">Suites</a></li>
              <li><a href="#experiences" className="hover:underline">Experiences</a></li>
              <li><a href="#home" className="hover:underline">Back to Top</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Savanna Royale Lodge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
