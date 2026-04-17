/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SkipBack, SkipForward, Play, Pause, Heart, Volume2, Mic, Piano, Speaker } from 'lucide-react';
import { motion } from 'motion/react';
import { TRACKS } from '../constants';

export function Player() {
  const currentTrack = TRACKS[2]; // Using Neon Genesis as default active

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 h-32 glass md:ml-64 md:w-[calc(100%-16rem)] shadow-[0_-20px_40px_rgba(0,0,0,0.5)] flex flex-col px-8 py-4 gap-4">
      {/* Visualizer Peak */}
      <div className="w-full flex items-center gap-4 max-w-6xl mx-auto">
        <span className="text-[10px] text-on-surface-variant font-mono w-8 text-right">1:24</span>
        <div className="flex-1 h-12 flex items-end gap-1 relative group cursor-pointer">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 rounded-full transition-all duration-300 ${i < 15 ? 'bg-tertiary shadow-[0_0_10px_rgba(255,110,133,0.3)]' : 'bg-surface-container-highest group-hover:bg-outline-variant'}`} 
              style={{ height: `${Math.random() * 80 + 20}%` }}
            ></div>
          ))}
          <div className="absolute top-0 left-[37.5%] bottom-0 w-[2px] bg-primary z-10 shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
        </div>
        <span className="text-[10px] text-on-surface-variant font-mono w-8">3:45</span>
      </div>

      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
          <div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden shadow-2xl">
            <img src={currentTrack.artUrl} alt="Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="text-sm font-bold truncate tracking-tight">{currentTrack.title}</h4>
            <p className="text-[10px] text-on-surface-variant truncate font-sans font-medium">{currentTrack.artist}</p>
          </div>
          <button className="text-on-surface-variant hover:text-tertiary transition-colors ml-2">
            <Heart size={16} />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 flex-1">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <SkipBack size={24} fill="currentColor" />
          </button>
          <button className="w-12 h-12 rounded-2xl bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-tertiary hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,110,133,0.1)]">
            <Pause size={28} />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <SkipForward size={24} fill="currentColor" />
          </button>
        </div>

        {/* Stem Sliders */}
        <div className="w-1/3 min-w-[240px] flex items-center justify-end gap-6 text-on-surface-variant">
           <div className="flex gap-4">
             <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors group">
                <Mic size={18} />
                <span className="text-[8px] font-bold uppercase tracking-widest font-headline opacity-60 group-hover:opacity-100">Vocals</span>
             </button>
             <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors group">
                <Piano size={18} />
                <span className="text-[8px] font-bold uppercase tracking-widest font-headline opacity-60 group-hover:opacity-100">Inst.</span>
             </button>
             <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors group">
                <Speaker size={18} />
                <span className="text-[8px] font-bold uppercase tracking-widest font-headline opacity-60 group-hover:opacity-100">Bass</span>
             </button>
           </div>

           <div className="flex items-center gap-2 group cursor-pointer w-24">
             <Volume2 size={18} className="group-hover:text-primary transition-colors" />
             <div className="h-1 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
               <div className="h-full w-2/3 bg-primary group-hover:bg-tertiary transition-all"></div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
