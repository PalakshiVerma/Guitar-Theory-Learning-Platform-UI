import { Link } from 'react-router';

interface TheoryCardProps {
  title: string;
  to?: string;
}

export function TheoryCard({ title, to = '#' }: TheoryCardProps) {
  return (
    <Link to={to}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-sm transition-all cursor-pointer">
        <p className="text-black">{title}</p>
      </div>
    </Link>
  );
}
