/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Download, Plus, Heart, ListFilter } from 'lucide-react';
import { motion } from 'motion/react';

export function SearchView({ query = 'Whoosh' }: { query?: string }) {
  const results = [
    { id: '1', name: 'Cinematic Air Whoosh 01', type: 'SFX', tags: 'Airy • Fast', duration: '0:02' },
    { id: '2', name: 'Digital Glitch Whoosh', type: 'SFX', tags: 'Cyber • Synthetic', duration: '0:03' },
    { id: '3', name: 'Deep Impact Swish', type: 'SFX', tags: 'Heavy • Low', duration: '0:05' },
    { id: '4', name: 'Windy Transition', type: 'SFX', tags: 'Ambient • Soft', duration: '0:04' },
  ];

  return (
    <div className="pt-24 pb-48 px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary mb-2">Search Results</p>
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter">"{query}"</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-on-surface-variant font-medium">128 results found</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-xs font-bold border border-outline-variant/10 hover:bg-surface-container-highest transition-all">
            <ListFilter size={14} />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 bg-surface-container-low p-4 rounded-3xl">
        {results.map((item) => (
          <div key={item.id} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
            <div className="flex items-center gap-6 w-1/2">
              <button className="w-10 h-10 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-surface shadow-lg">
                <Play size={18} fill="currentColor" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tracking-wide">{item.name}</span>
                  <span className="px-1.5 py-0.5 bg-surface-container-highest rounded text-[8px] font-black uppercase tracking-wider text-on-surface-variant">{item.type}</span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">{item.tags}</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center gap-[2px] h-6 px-12 group-hover:px-8 transition-all opacity-40 group-hover:opacity-100">
               {Array.from({ length: 24 }).map((_, i) => (
                 <div 
                   key={i} 
                   className="flex-1 bg-outline-variant rounded-full" 
                   style={{ height: `${Math.random() * 80 + 20}%` }}
                 ></div>
               ))}
            </div>

            <div className="flex items-center justify-end gap-6 w-1/4">
              <span className="text-xs font-mono text-on-surface-variant">{item.duration}</span>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-on-surface-variant hover:text-tertiary transition-colors"><Heart size={16} /></button>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Plus size={16} /></button>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Download size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-xs font-bold text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-tertiary/30">Load More Results</button>
      </div>
    </div>
  );
}
