import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Chords from './pages/Chords';
import ChordDetail from './pages/ChordDetail';
import Music from './pages/Music';
import Lesson from './pages/Lesson';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/theory',
    Component: Theory,
  },
  {
    path: '/chords',
    Component: Chords,
  },
  {
    path: '/chords/:chordId',
    Component: ChordDetail,
  },
  {
    path: '/music',
    Component: Music,
  },
  {
    path: '/lesson/:topic',
    Component: Lesson,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
