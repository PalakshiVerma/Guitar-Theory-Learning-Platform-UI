import { useParams, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

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

export default function ChordDetail() {
  const { chordId } = useParams();
  const chord = chords.find(c => c.id === chordId);

  if (!chord) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-black mb-4">Chord Not Found</h1>
            <Link to="/chords" className="text-orange-500 hover:underline">
              Back to Chords
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/chords" className="text-orange-500 hover:underline">
            ← Back to Chords
          </Link>
        </div>

        {/* Chord Header */}
        <div className="mb-8">
          <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm mb-3">
            {chord.category}
          </div>
          <h1 className="text-4xl font-bold text-black mb-2">{chord.name}</h1>
          <p className="text-xl text-gray-600">
            Master the {chord.name} chord with step-by-step guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chord Diagram */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-bold text-black mb-6">Chord Diagram</h2>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center border-2 border-gray-300">
              <div className="text-center text-gray-500">
                <p className="font-semibold mb-2">Chord Diagram</p>
                <p className="text-sm">{chord.name}</p>
              </div>
            </div>
          </div>

          {/* How to Play */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-bold text-black mb-4">How to Play</h2>
            <p className="text-gray-600 mb-6">
              This is the {chord.name} chord. Place your fingers on the
              fretboard as shown in the diagram. Make sure each string
              rings out clearly when strummed.
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-black mb-3">Finger Positions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-orange-500 text-white rounded-full text-center mr-3 flex-shrink-0">1</span>
                  <span>Index finger on the 2nd fret of the B string</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-orange-500 text-white rounded-full text-center mr-3 flex-shrink-0">2</span>
                  <span>Middle finger on the 2nd fret of the D string</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-orange-500 text-white rounded-full text-center mr-3 flex-shrink-0">3</span>
                  <span>Ring finger on the 3rd fret of the A string</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm text-orange-800">
                <strong>Pro Tip:</strong> Practice transitioning between this chord and other common chords to build muscle memory.
              </p>
            </div>
          </div>
        </div>

        {/* Example Variations */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-xl font-bold text-black mb-6">Example Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">{chord.name} - Open Position</h3>
              <p className="text-gray-600 text-sm">
                The standard open position fingering for beginners
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">{chord.name} - Barre Chord</h3>
              <p className="text-gray-600 text-sm">
                Moveable shape using the barre technique
              </p>
            </div>
          </div>
        </div>

        {/* Related Chords */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-xl font-bold text-black mb-6">Related Chords</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chords
              .filter(c => c.category === chord.category && c.id !== chord.id)
              .slice(0, 4)
              .map(relatedChord => (
                <Link
                  key={relatedChord.id}
                  to={`/chords/${relatedChord.id}`}
                  className="bg-gray-50 border border-gray-200 hover:border-orange-500 rounded-lg p-4 transition-colors"
                >
                  <p className="font-semibold text-black">{relatedChord.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{relatedChord.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
