/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, MoreHorizontal, Heart } from 'lucide-react';
import { GENRES, TRACKS } from '../constants';
import { motion } from 'motion/react';

export function GenresView() {
  return (
    <div className="pt-24 pb-48 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-4">Genres</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl font-sans leading-relaxed">
          Explore our curated collection of sonic aesthetics. From sweeping cinematic orchestral arrangements to gritty underground electronic beats.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[240px]">
        {/* Cinematic - Featured */}
        <div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-surface-container transition-all hover:scale-[1.01] hover:shadow-2xl">
          <img 
            src={GENRES[0].imageUrl} 
            alt="Cinematic" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
            <div className="max-w-md">
              <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3 inline-block">Featured</span>
              <h3 className="text-4xl font-extrabold font-headline mb-2">Cinematic</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">Orchestral, trailer, and film score elements designed for high-impact storytelling.</p>
            </div>
            <button className="w-14 h-14 bg-primary text-surface rounded-full flex items-center justify-center hover:bg-tertiary hover:text-white transition-all shadow-[0_0_20px_rgba(255,110,133,0.3)]">
              <Play size={24} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Other Genres */}
        {GENRES.slice(1).map((genre, i) => (
          <div 
            key={genre.id}
            className={`group relative overflow-hidden rounded-2xl bg-surface-container transition-all hover:scale-[1.02] ${i === 2 ? 'lg:col-span-2' : ''}`}
          >
            <img 
              src={genre.imageUrl} 
              alt={genre.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between">
              <div>
                <h3 className="text-xl font-bold font-headline mb-1">{genre.name}</h3>
                <p className="text-on-surface-variant text-xs">{genre.description}</p>
              </div>
              {i === 2 && (
                <div className="text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={20} fill="currentColor" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Additional static cards for grid layout as seen in screenshot */}
        <div className="rounded-2xl bg-gradient-to-br from-surface-container-high to-surface-container-low p-6 flex flex-col justify-end group cursor-pointer hover:bg-surface-container-highest transition-colors">
            <h3 className="text-xl font-bold font-headline mb-1">Pop</h3>
            <p className="text-on-surface-variant text-xs">Contemporary, Synth-Pop</p>
        </div>

        <div className="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-end group cursor-pointer hover:bg-surface-container-highest transition-colors relative overflow-hidden">
            <div className="absolute top-4 right-4 text-outline-variant group-hover:text-tertiary transition-colors">
              <Play size={16} />
            </div>
            <h3 className="text-xl font-bold font-headline mb-1">Rock</h3>
            <p className="text-on-surface-variant text-xs">Indie, Alternative, Metal</p>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-headline font-bold mb-8">Trending in Genres</h3>
        <div className="space-y-1">
          {TRACKS.map((track) => (
            <div key={track.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-surface-container-high transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden relative group-hover:shadow-[0_0_15px_rgba(255,110,133,0.2)]">
                <img src={track.artUrl} alt="Track" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={16} fill="white" className="text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold text-sm ${track.id === '2' ? 'text-tertiary' : ''}`}>{track.title} {track.id === '2' && '(Active)'}</h4>
                <p className="text-xs text-on-surface-variant font-medium">{track.category} • {track.bpm} BPM</p>
              </div>
              
              <div className="hidden md:flex items-center gap-[3px] w-24 h-6 opacity-40 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-full ${track.id === '2' ? 'bg-tertiary animate-pulse' : 'bg-outline-variant'}`} 
                    style={{ 
                      height: `${track.id === '2' ? Math.random() * 80 + 20 : Math.random() * 40 + 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>

              <div className="text-xs font-mono text-on-surface-variant w-12 text-right">{track.duration}</div>
              
              <button className="text-on-surface-variant hover:text-tertiary p-2 transition-colors">
                <Heart size={18} fill={track.id === '2' ? 'currentColor' : 'none'} className={track.id === '2' ? 'text-tertiary' : ''} />
              </button>
              <button className="text-on-surface-variant hover:text-primary p-2 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
