/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LayoutDashboard, 
  Library, 
  Music2, 
  Palette, 
  Smile, 
  Waves, 
  Plus, 
  Bookmark, 
  Download, 
  ListMusic 
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Discover', icon: LayoutDashboard },
    { id: 'genres', label: 'Genres', icon: Library },
    { id: 'themes', label: 'Themes', icon: Palette },
    { id: 'moods', label: 'Moods', icon: Smile },
    { id: 'sfx', label: 'SFX', icon: Waves },
  ];

  const libraryItems = [
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'playlists', label: 'Playlists', icon: ListMusic },
  ];

  return (
    <aside className="w-64 bg-surface-container-low h-screen fixed left-0 top-0 flex flex-col py-8 z-50 overflow-hidden">
      <div className="px-8 mb-12">
        <h1 className="text-xl font-bold tracking-tighter font-headline">The Sonic Editorial</h1>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Curated Sound</p>
      </div>

      <div className="px-4 mb-8">
        <button 
          className="w-full bg-primary text-surface font-bold rounded-full py-3 px-6 text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group"
          onClick={() => {}}
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform" />
          New Collection
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl transition-all group ${
              currentView === item.id 
                ? 'bg-surface-container-high text-primary border-l-2 border-tertiary' 
                : 'text-on-surface-variant hover:bg-surface-container/50 hover:text-primary'
            }`}
          >
            <item.icon 
              size={20} 
              className={currentView === item.id ? 'text-tertiary fill-tertiary/20' : 'group-hover:text-primary'}
            />
            <span className={`font-headline font-semibold text-sm ${currentView === item.id ? 'text-primary' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}

        <div className="pt-8 pb-4">
          <p className="px-4 text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-4">Your Library</p>
          <div className="space-y-1">
            {libraryItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-4 py-2 px-4 text-on-surface-variant hover:text-primary hover:bg-surface-container/30 rounded-lg transition-all"
              >
                <item.icon size={16} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="px-6 mt-auto">
        <div className="p-4 bg-surface-container rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30 text-center">
             <img src="https://picsum.photos/seed/producer/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-xs font-bold truncate">Producer One</p>
            <p className="text-[10px] text-on-surface-variant">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
