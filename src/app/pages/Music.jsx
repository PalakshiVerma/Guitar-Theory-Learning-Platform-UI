import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Search } from 'lucide-react';

const popularProgressions = [
  { id: 1, name: 'I-V-vi-IV', chords: 'C - G - Am - F', description: 'The most popular progression in pop music' },
  { id: 2, name: 'I-IV-V', chords: 'C - F - G', description: 'Classic rock and blues progression' },
  { id: 3, name: 'ii-V-I', chords: 'Dm - G - C', description: 'Essential jazz progression' },
  { id: 4, name: 'I-vi-IV-V', chords: 'C - Am - F - G', description: '50s progression' },
];

const exampleSongs = [
  { 
    id: 1, 
    title: 'Let It Be', 
    artist: 'The Beatles', 
    chords: 'C - G - Am - F',
    difficulty: 'Beginner'
  },
  { 
    id: 2, 
    title: 'Wonderwall', 
    artist: 'Oasis', 
    chords: 'Em - G - D - A',
    difficulty: 'Beginner'
  },
  { 
    id: 3, 
    title: 'Hotel California', 
    artist: 'Eagles', 
    chords: 'Bm - F# - A - E',
    difficulty: 'Intermediate'
  },
  { 
    id: 4, 
    title: 'Someone Like You', 
    artist: 'Adele', 
    chords: 'A - E - F#m - D',
    difficulty: 'Beginner'
  },
];

export default function Music() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = exampleSongs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Learn Through Songs</h1>
          <p className="text-xl text-gray-600">
            Apply your theory knowledge by learning popular songs and chord progressions
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for songs or artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
            />
          </div>
        </div>

        {/* Popular Chord Progressions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6">Popular Chord Progressions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularProgressions.map((progression) => (
              <div 
                key={progression.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-black mb-2">{progression.name}</h3>
                <p className="text-orange-500 font-mono mb-3">{progression.chords}</p>
                <p className="text-gray-600">{progression.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Example Songs */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">Example Songs</h2>
          <div className="space-y-4">
            {filteredSongs.map((song) => (
              <div 
                key={song.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-black mb-1">{song.title}</h3>
                    <p className="text-gray-600 mb-3">{song.artist}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-orange-500 font-mono">{song.chords}</p>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        song.difficulty === 'Beginner' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {song.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Learn
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No songs found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
