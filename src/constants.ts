/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Track, Genre, Theme } from './types';

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    artist: 'Synthwave Collective',
    category: 'Synthwave',
    bpm: 120,
    duration: '3:42',
    artUrl: 'https://picsum.photos/seed/neon/400/400',
    waveform: [20, 30, 50, 70, 100, 80, 60, 40, 50, 70, 90, 100, 80, 50, 30, 20]
  },
  {
    id: '2',
    title: 'Urban Grit',
    artist: 'Boom Bap Masters',
    category: 'Boom Bap',
    bpm: 85,
    duration: '2:15',
    artUrl: 'https://picsum.photos/seed/urban/400/400',
    waveform: [40, 60, 80, 50, 70, 90, 100, 80, 60, 40, 50, 30, 40, 60, 80, 70]
  },
  {
    id: '3',
    title: 'Neon Genesis',
    artist: 'Cyberpunk Atmospheres',
    category: 'Electronic',
    bpm: 105,
    duration: '4:50',
    artUrl: 'https://picsum.photos/seed/cyber/400/400',
    waveform: [10, 20, 40, 60, 50, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10]
  }
];

export const GENRES: Genre[] = [
  {
    id: 'cinematic',
    name: 'Cinematic',
    description: 'Orchestral, trailer, and film score elements designed for high-impact storytelling.',
    imageUrl: 'https://picsum.photos/seed/cinema/800/600',
    tags: ['Epic', 'Orchestral', 'Suspense'],
    trackCount: '24.5k Tracks'
  },
  {
    id: 'electronic',
    name: 'Electronic',
    description: 'Techno, House, Ambient',
    imageUrl: 'https://picsum.photos/seed/electro/800/600',
    tags: ['Synthwave', 'Techno', 'Ambient']
  },
  {
    id: 'hiphop',
    name: 'Hip Hop',
    description: 'Boom Bap, Trap, Lo-Fi',
    imageUrl: 'https://picsum.photos/seed/hiphop/800/600',
    tags: ['Boom Bap', 'Trap', 'Lo-Fi']
  },
  {
    id: 'jazz',
    name: 'Jazz & Soul',
    description: 'Live instrumentation, brass, and grooves',
    imageUrl: 'https://picsum.photos/seed/jazz/800/600',
    tags: ['Brass', 'Groove', 'Smooth']
  }
];

export const THEMES: Theme[] = [
  {
    id: 'doc',
    name: 'Documentary',
    description: 'Sparse, emotional, and investigative scores.',
    imageUrl: 'https://picsum.photos/seed/doc/800/600',
    trackCount: 42
  },
  {
    id: 'ad',
    name: 'Advertising',
    description: 'Upbeat, punchy, and attention-grabbing.',
    imageUrl: 'https://picsum.photos/seed/ad/800/600',
    trackCount: 85
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Adaptive loops, combat tension, and atmospheric exploration beds.',
    imageUrl: 'https://picsum.photos/seed/game/800/600',
    trackCount: 120
  }
];
