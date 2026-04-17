/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, ArrowRight, ArrowUpRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { GENRES, TRACKS } from '../constants';

export function HomeView() {
  return (
    <div className="pt-24 pb-48 px-8 max-w-7xl mx-auto">
      <section className="mb-20">
        <div className="relative rounded-[2rem] overflow-hidden aspect-[21/9] bg-surface-container flex flex-col justify-center p-12 isolate group">
          <img 
            src="https://picsum.photos/seed/sonic/1600/600" 
            alt="Hero" 
            className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-60 group-hover:scale-105 transition-transform duration-[2s]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent z-[-1]"></div>
          <div className="max-w-2xl">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary mb-6">
              <TrendingUp size={14} />
              Trending Now
            </span>
            <h1 className="text-7xl font-extrabold font-headline tracking-tighter mb-6 leading-[0.9]">Sonic<br/>Editorial.</h1>
            <p className="text-on-surface-variant text-lg max-w-lg mb-10 font-sans leading-relaxed">
              Curated audio assets and cinematic soundscapes meticulously crafted for professional narrative environments.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-primary text-surface font-bold rounded-full hover:bg-tertiary hover:scale-105 transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(255,110,133,0.3)]">
                Start Exploring
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-surface-container-highest/50 backdrop-blur-md text-primary font-bold rounded-full hover:bg-surface-container-highest transition-all">
                The Library
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-headline">Latest Additions</h2>
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 group">
              View All
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="space-y-4">
            {TRACKS.map((track) => (
              <div key={track.id} className="group flex items-center gap-6 p-4 rounded-3xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer border border-transparent hover:border-outline-variant/10">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest overflow-hidden relative group-hover:rotate-1 transition-transform">
                  <img src={track.artUrl} alt={track.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={24} fill="white" className="text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-base tracking-tight truncate">{track.title}</h4>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">{track.artist} • {track.category}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-mono text-on-surface-variant">{track.duration}</span>
                  <span className="text-[10px] font-bold text-tertiary/50 uppercase tracking-widest">{track.bpm} BPM</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-headline mb-8">Curated Genres</h2>
          <div className="grid grid-cols-1 gap-4">
            {GENRES.slice(0, 3).map((genre) => (
              <div key={genre.id} className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer isolate">
                <img 
                  src={genre.imageUrl} 
                  alt={genre.name} 
                  className="absolute inset-0 w-full h-full object-cover z-[-2] opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-[-1]"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold font-headline mb-1">{genre.name}</h3>
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{genre.trackCount || '15k Tracks'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
