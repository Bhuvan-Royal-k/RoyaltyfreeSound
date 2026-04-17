/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function MoodsView() {
  const moods = [
    { title: 'Melancholy', sub: 'Intimate pianos and weeping cellos.', img: 'https://picsum.photos/seed/mel/600/600' },
    { title: 'Energetic', sub: 'Driving basslines and heavy hits.', img: 'https://picsum.photos/seed/ener/600/600' },
    { title: 'Ethereal', sub: 'Ambient soundscapes and vocal washes.', img: 'https://picsum.photos/seed/ethereal/600/600' },
  ];

  return (
    <div className="pt-24 pb-48 px-12 max-w-[1600px] mx-auto">
      <header className="mb-16">
        <h1 className="text-7xl font-extrabold font-headline tracking-tighter mb-4 leading-none">Moods.</h1>
        <p className="text-on-surface-variant text-xl max-w-2xl font-light font-sans">
          Curated emotional landscapes. Find the perfect sonic frequency for your narrative, meticulously categorized for professional storytelling.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px]">
        {/* Uplifting Featured */}
        <div className="md:col-span-8 row-span-2 group relative rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-10 isolate">
          <img 
            src="https://picsum.photos/seed/uplifting/1200/800" 
            alt="Uplifting" 
            className="absolute inset-0 w-full h-full object-cover z-[-2] transition-transform duration-1000 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-[-1]"></div>
          <div className="flex justify-between items-end w-full">
            <div className="max-w-md">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary mb-3 block">Featured Category</span>
              <h3 className="text-5xl font-extrabold font-headline mb-4">Uplifting</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">Inspiring orchestral sweeps, bright acoustic rhythms, and euphoric synth textures designed to elevate.</p>
            </div>
            <button className="w-16 h-16 rounded-full bg-primary text-surface flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-all shadow-2xl">
              <Play size={28} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Tension */}
        <div className="md:col-span-4 row-span-2 group relative rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-8 isolate">
          <img 
            src="https://picsum.photos/seed/tension/600/900" 
            alt="Tension" 
            className="absolute inset-0 w-full h-full object-cover z-[-2] transition-transform duration-1000 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-[-1]"></div>
          <div>
            <h3 className="text-3xl font-bold font-headline mb-2">Tension</h3>
            <p className="text-on-surface-variant text-sm mb-6 max-w-xs">Pulsating drones, ticking clockwork percussions, and dissonant strings.</p>
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div>
              142 Tracks Available
            </div>
          </div>
        </div>

        {/* Other Mood Cards */}
        {moods.map((mood) => (
          <div key={mood.title} className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-8 isolate cursor-pointer">
            <img 
              src={mood.img} 
              alt={mood.title} 
              className="absolute inset-0 w-full h-full object-cover z-[-2] transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-[-1]"></div>
            <h3 className="text-2xl font-bold font-headline mb-1">{mood.title}</h3>
            <p className="text-on-surface-variant text-xs">{mood.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
