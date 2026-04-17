/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Player } from './components/Player';
import { GenresView } from './components/GenresView';
import { SFXView } from './components/SFXView';
import { MoodsView } from './components/MoodsView';
import { ThemesView } from './components/ThemesView';
import { HomeView } from './components/HomeView';
import { SearchView } from './components/SearchView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('search');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <HomeView />;
      case 'genres':
        return <GenresView />;
      case 'sfx':
        return <SFXView />;
      case 'moods':
        return <MoodsView />;
      case 'themes':
        return <ThemesView />;
      case 'search':
        return <SearchView query={searchQuery} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-tertiary/30">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="md:ml-64 flex flex-col">
        <TopNav onSearch={handleSearch} />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Player />
    </div>
  );
}
