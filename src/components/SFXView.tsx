/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Download, Plus, ListFilter, SortDesc } from 'lucide-react';
import { motion } from 'motion/react';

export function SFXView() {
  const sfxItems = [
    { id: '1', name: 'Subterranean Boom 04', tags: 'Cinematic • Low Frequency', duration: '0:04' },
    { id: '2', name: 'Metallic Slam Reverb', tags: 'Industrial • Trailer', duration: '0:06' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-48 px-8 max-w-7xl mx-auto"
    >
      <header className="mb-12 flex items-end justify-between">
        <div>
          <h1 className="text-6xl font-extrabold font-headline tracking-tighter mb-4 pr-1">SFX Archive</h1>
          <p className="text-on-surface-variant text-lg max-w-xl font-sans leading-relaxed">
            Surgically crafted audio assets for cinematic, editorial, and interactive production environments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full bg-surface-container-high text-sm font-bold border border-outline-variant/10 hover:bg-surface-container-highest transition-colors flex items-center gap-2 group">
            <ListFilter size={16} className="group-hover:scale-110 transition-transform" />
            Filter by Format
          </button>
          <button className="p-2 w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <SortDesc size={18} />
          </button>
        </div>
      </header>

      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold font-headline">Impacts & Hits</h2>
          <div className="flex-1 h-[1px] bg-outline-variant/10"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">24 Items</span>
        </div>

        <div className="bg-surface-container-low rounded-3xl p-3 flex flex-col gap-1">
          {sfxItems.map((item) => (
            <div key={item.id} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
              <div className="flex items-center gap-6 w-1/3">
                <button className="w-10 h-10 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-surface">
                  <Play size={18} fill="currentColor" />
                </button>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-wide">{item.name}</span>
                  <span className="text-xs text-on-surface-variant font-medium">{item.tags}</span>
                </div>
              </div>

              {/* Waveform Micro */}
              <div className="flex-1 flex items-end justify-center gap-[3px] h-8 opacity-40 group-hover:opacity-100 transition-opacity">
                 {Array.from({ length: 8 }).map((_, i) => (
                   <div 
                    key={i} 
                    className={`w-[2px] rounded-full ${i === 3 || i === 4 ? 'bg-tertiary shadow-[0_0_8px_rgba(255,110,133,0.5)]' : 'bg-outline-variant'}`} 
                    style={{ height: `${i === 3 ? 100 : i === 4 ? 70 : Math.random() * 40 + 20}%` }}
                   ></div>
                 ))}
              </div>

              <div className="flex items-center justify-end gap-6 w-1/3">
                <span className="text-xs font-mono text-on-surface-variant">{item.duration}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Plus size={16} /></button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Download size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold font-headline">Atmospheres & Drones</h2>
          <div className="flex-1 h-[1px] bg-outline-variant/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-3xl p-8 group cursor-pointer hover:bg-surface-container transition-all relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="text-xl font-bold font-headline">Abyssal Drone</h3>
                   <p className="text-xs text-on-surface-variant font-medium mt-1">Dark Ambient • 1:45</p>
                 </div>
                 <button className="w-12 h-12 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-surface shadow-2xl">
                    <Play size={22} fill="currentColor" />
                 </button>
               </div>
               
               <div className="w-full flex items-center gap-1 opacity-30 group-hover:opacity-80 transition-opacity h-12">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-outline-variant rounded-full" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                  ))}
               </div>
             </div>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-8 group cursor-pointer hover:bg-surface-container transition-all relative overflow-hidden">
             <div className="relative z-10 flex flex-col h-full justify-between gap-12">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="text-xl font-bold font-headline">Ethereal Winds</h3>
                   <p className="text-xs text-on-surface-variant font-medium mt-1">Sci-Fi • 2:10</p>
                 </div>
                 <button className="w-12 h-12 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-surface shadow-2xl">
                    <Play size={22} fill="currentColor" />
                 </button>
               </div>
               <div className="w-full flex items-center gap-1 opacity-30 group-hover:opacity-80 transition-opacity h-12">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-outline-variant rounded-full" style={{ height: `${Math.random() * 40 + 10}%` }}></div>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
