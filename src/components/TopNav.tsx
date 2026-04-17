/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export function TopNav({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface/80 backdrop-blur-xl z-40 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8 font-headline text-[10px] uppercase tracking-[0.2em] font-bold">
        <button onClick={() => onSearch('')} className="text-on-surface-variant hover:text-primary transition-colors">Discover</button>
        <a href="#" className="text-primary border-b border-primary py-1">Library</a>
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Pro Tools</a>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 max-w-md mx-12 relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary group-focus-within:scale-110 transition-all" size={18} />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search genres, stems, or tracks..."
          className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-1 focus:ring-tertiary/30 focus:bg-surface-container-highest transition-all placeholder:text-on-surface-variant"
        />
      </form>

      <div className="flex items-center gap-6">
        <button className="text-on-surface-variant hover:text-primary transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-tertiary rounded-full border border-surface shadow-[0_0_8px_rgba(255,110,133,0.5)]"></span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30 ml-2 cursor-pointer hover:scale-110 transition-transform">
          <img src="https://picsum.photos/seed/p/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </header>
  );
}
