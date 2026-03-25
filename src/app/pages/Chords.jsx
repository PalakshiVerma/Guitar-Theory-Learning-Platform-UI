import { useState } from 'react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChordCard } from '../components/ChordCard';

const chords = [
  // Major
  { id: 'c-major', name: 'C Major', category: 'Major' },
  { id: 'g-major', name: 'G Major', category: 'Major' },
  { id: 'd-major', name: 'D Major', category: 'Major' },
  { id: 'a-major', name: 'A Major', category: 'Major' },
  { id: 'e-major', name: 'E Major', category: 'Major' },
  
  // Minor
  { id: 'a-minor', name: 'A Minor', category: 'Minor' },
  { id: 'e-minor', name: 'E Minor', category: 'Minor' },
  { id: 'd-minor', name: 'D Minor', category: 'Minor' },
  
  // 7th
  { id: 'c7', name: 'C7', category: '7th' },
  { id: 'g7', name: 'G7', category: '7th' },
  { id: 'd7', name: 'D7', category: '7th' },
  
  // Extended
  { id: 'cmaj7', name: 'Cmaj7', category: 'Extended' },
  { id: 'gmaj7', name: 'Gmaj7', category: 'Extended' },
];

export default function Chords() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Major', 'Minor', '7th', 'Extended'];
  
  const filteredChords = selectedCategory === 'All' 
    ? chords 
    : chords.filter(chord => chord.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Chords</h1>
          <p className="text-xl text-gray-600">
            Explore essential chord shapes and learn how to play them
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Chord Grid */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">
            {selectedCategory} Chords
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredChords.map((chord) => (
              <Link key={chord.id} to={`/chords/${chord.id}`}>
                <ChordCard
                  name={chord.name}
                  category={chord.category}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
