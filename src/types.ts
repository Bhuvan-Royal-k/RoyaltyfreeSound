/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Track {
  id: string;
  title: string;
  artist: string;
  category: string;
  bpm: number;
  duration: string;
  artUrl: string;
  waveform?: number[];
}

export interface Genre {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  trackCount?: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  trackCount: number;
}
