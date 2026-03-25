import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';

interface LearningPathCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export function LearningPathCard({ title, description, icon: Icon, to }: LearningPathCardProps) {
  return (
    <Link to={to}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-all cursor-pointer group">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-50 rounded-lg mb-4 group-hover:bg-orange-100 transition-colors">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
