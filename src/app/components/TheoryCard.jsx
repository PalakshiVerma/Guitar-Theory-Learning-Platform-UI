import { Link } from 'react-router';

export function TheoryCard({ title, to = '#' }) {
  return (
    <Link to={to}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-sm transition-all cursor-pointer">
        <p className="text-black">{title}</p>
      </div>
    </Link>
  );
}
