import React from 'react';
import { Eye } from 'lucide-react';

interface VisitCounterProps {
  count: number;
}

const VisitCounter: React.FC<VisitCounterProps> = ({ count }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-lg px-4 py-2 border border-slate-200">
        <div className="flex items-center gap-2 text-slate-700">
          <Eye size={16} />
          <span className="text-sm font-medium">
            {count.toLocaleString()} {count === 1 ? 'visit' : 'visits'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisitCounter;