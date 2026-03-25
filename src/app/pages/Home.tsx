import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LearningPathCard } from '../components/LearningPathCard';
import { RoadmapStep } from '../components/RoadmapStep';
import { BookOpen, Music2, Library } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-6">
                Learn Guitar Theory Visually
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understand chords, scales, and songs step by step
              </p>
              <Link to="/theory">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Start Learning
                </button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758524944402-1903b38f848f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMG11c2ljJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc0MTA3NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Guitar learning"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LearningPathCard
              title="Theory"
              description="Master the fundamentals of music theory from notes to harmony"
              icon={BookOpen}
              to="/theory"
            />
            <LearningPathCard
              title="Chords"
              description="Learn essential chord shapes and progressions"
              icon={Music2}
              to="/chords"
            />
            <LearningPathCard
              title="Songs"
              description="Apply your knowledge by learning popular songs"
              icon={Library}
              to="/music"
            />
          </div>
        </div>
      </section>

      {/* Beginner Roadmap */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Beginner Roadmap
          </h2>
          <div className="flex justify-center items-start">
            <RoadmapStep number={1} title="Notes" />
            <RoadmapStep number={2} title="Scales" />
            <RoadmapStep number={3} title="Chords" />
            <RoadmapStep number={4} title="Songs" isLast />
          </div>
          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Follow this proven path from complete beginner to playing your first songs. 
            Each step builds on the previous one.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
