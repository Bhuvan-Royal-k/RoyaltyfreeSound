/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play } from 'lucide-react';
import { THEMES } from '../constants';
import { motion } from 'motion/react';

export function ThemesView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-48 px-8 max-w-[1600px] mx-auto"
    >
      <header className="mb-12">
        <h2 className="text-5xl font-extrabold tracking-tight font-headline mb-2">Curated Themes</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl font-sans">
          Explore sonic landscapes designed for specific narrative contexts. Hand-selected by our editorial team for premium productions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {THEMES.map((theme, i) => (
          <a 
            key={theme.id}
            href="#" 
            className={`group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container transition-all hover:scale-[1.02] ${i === 2 ? 'lg:col-span-2' : ''}`}
          >
            <img 
              src={theme.imageUrl} 
              alt={theme.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
               <div className="mb-2">
                 <h3 className="text-3xl font-bold font-headline text-primary mb-1 underline-offset-8 group-hover:underline transition-all">{theme.name}</h3>
                 <p className="text-on-surface-variant text-sm max-w-xs">{theme.description}</p>
               </div>
               <div className="flex items-center gap-4 mt-6">
                 <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${i === 2 ? 'bg-tertiary text-white shadow-[0_0_20px_rgba(255,110,133,0.4)]' : 'bg-surface-container-highest text-primary group-hover:bg-primary group-hover:text-surface'}`}>
                   <Play size={20} fill="currentColor" />
                 </button>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{theme.trackCount}+ Tracks</span>
               </div>
            </div>
          </a>
        ))}

        {/* Trailers card as seen in screenshot */}
        <a href="#" className="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container transition-all hover:scale-[1.02]">
           <img src="https://picsum.photos/seed/trailer/600/600" alt="Trailers" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8">
             <h3 className="text-2xl font-bold font-headline mb-1">Trailers</h3>
             <p className="text-on-surface-variant text-sm mb-4">Epic hits, risers, and massive orchestral swells.</p>
             <div className="flex items-center gap-3">
               <Play size={16} className="text-on-surface-variant group-hover:text-tertiary transition-colors" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">56 Tracks</span>
             </div>
           </div>
        </a>
      </div>
    </motion.div>
  );
}
