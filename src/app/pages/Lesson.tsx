import { useParams, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const lessonContent: Record<string, {
  title: string;
  content: string[];
  nextLesson?: { title: string; path: string };
}> = {
  notes: {
    title: 'Understanding Notes',
    content: [
      'Notes are the foundation of all music. In Western music, we use 12 different notes that repeat in patterns called octaves.',
      'The natural notes are: A, B, C, D, E, F, and G. Between most of these notes are sharps (#) and flats (♭).',
      'On a guitar, each fret represents one semitone (half-step). Moving up one fret raises the pitch by one semitone.',
    ],
    nextLesson: { title: 'Fretboard', path: '/lesson/fretboard' },
  },
  fretboard: {
    title: 'Guitar Fretboard',
    content: [
      'The guitar fretboard is where you play notes. Understanding how notes are arranged on the fretboard is crucial for mastering the guitar.',
      'Standard tuning from lowest to highest string is: E-A-D-G-B-E. Each string produces a different note when played open.',
      'Learning the fretboard takes time. Start by memorizing the natural notes on each string, then add the sharps and flats.',
    ],
    nextLesson: { title: 'Scales', path: '/lesson/scales' },
  },
  scales: {
    title: 'Music Scales',
    content: [
      'A scale is a sequence of notes in ascending or descending order. Scales are the building blocks of melodies and solos.',
      'The major scale follows the pattern: Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H).',
      'The minor scale has a different pattern and creates a sadder, more emotional sound compared to the major scale.',
    ],
    nextLesson: { title: 'Intervals', path: '/lesson/intervals' },
  },
  intervals: {
    title: 'Musical Intervals',
    content: [
      'An interval is the distance between two notes. Understanding intervals helps you understand chord construction and melody.',
      'Common intervals include: unison, second, third, fourth, fifth, sixth, seventh, and octave.',
      'Intervals can be major, minor, perfect, augmented, or diminished, depending on the exact distance between notes.',
    ],
    nextLesson: { title: 'Harmony', path: '/lesson/harmony' },
  },
  harmony: {
    title: 'Harmony',
    content: [
      'Harmony is the combination of different musical notes played or sung simultaneously. It adds depth and richness to music.',
      'Chords are the foundation of harmony. They are built by stacking intervals, typically thirds, on top of each other.',
      'Understanding harmony allows you to create chord progressions and understand how different chords work together.',
    ],
  },
};

export default function Lesson() {
  const { topic } = useParams();
  const lesson = topic ? lessonContent[topic] : null;

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Lesson Not Found</h1>
          <Link to="/theory" className="text-orange-500 hover:underline">
            Back to Theory
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Title */}
        <div className="mb-12">
          <Link to="/theory" className="text-orange-500 hover:underline mb-4 inline-block">
            ← Back to Theory
          </Link>
          <h1 className="text-4xl font-bold text-black mb-4">{lesson.title}</h1>
        </div>

        {/* Content Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            {lesson.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Visual Block */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Visual Guide</h2>
          <div className="rounded-lg overflow-hidden mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1687717730080-08eedae7d435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBmcmV0Ym9hcmQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDEwNzUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Guitar fretboard"
              className="w-full h-64 object-cover"
            />
          </div>
          <p className="text-gray-600">
            Interactive diagrams and visual aids help you understand {lesson.title.toLowerCase()} concepts more effectively.
          </p>
        </div>

        {/* Try This Next */}
        {lesson.nextLesson && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Try This Next</h2>
            <Link 
              to={lesson.nextLesson.path}
              className="flex items-center justify-between bg-white border border-orange-200 rounded-lg p-6 hover:border-orange-500 transition-colors group"
            >
              <div>
                <p className="text-gray-600 mb-1">Next Lesson</p>
                <p className="font-semibold text-black text-lg">{lesson.nextLesson.title}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {!lesson.nextLesson && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Ready to Practice?</h2>
            <p className="text-gray-700 mb-6">
              You've completed this learning path! Now apply your knowledge by learning chords and songs.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/chords"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Explore Chords
              </Link>
              <Link 
                to="/music"
                className="px-6 py-3 bg-white border border-gray-300 text-black rounded-lg hover:border-orange-500 transition-colors"
              >
                Learn Songs
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
