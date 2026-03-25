import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TheoryCard } from '../components/TheoryCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Theory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Music Theory</h1>
          <p className="text-xl text-gray-600">
            Build a strong foundation in music theory fundamentals
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694675274861-c4ceb495305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHNoZWV0JTIwbm90ZXMlMjB0aGVvcnl8ZW58MXx8fHwxNzc0MTA3NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Music theory"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Basics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Basics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TheoryCard title="Notes" to="/lesson/notes" />
            <TheoryCard title="Fretboard" to="/lesson/fretboard" />
          </div>
        </div>

        {/* Intermediate */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Intermediate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TheoryCard title="Scales" to="/lesson/scales" />
            <TheoryCard title="Intervals" to="/lesson/intervals" />
          </div>
        </div>

        {/* Advanced */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Advanced</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TheoryCard title="Harmony" to="/lesson/harmony" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
