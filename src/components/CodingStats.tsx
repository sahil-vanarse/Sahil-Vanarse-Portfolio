import React from 'react';

const CodingStats: React.FC = () => {
  const leetcodeUsername = 'sahil_vanarse';
  const gfgUsername = 'sahilvanarse';

  return (
    <section id="coding-stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
          Coding Activity
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          Problem Solving
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LeetCode Card */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">LeetCode</h3>
            <a
              href={`https://leetcode.com/u/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?ext=stats,heatmap`}
                alt="LeetCode stats and calendar"
                className="rounded-lg shadow-md w-full"
              />
            </a>
          </div>

          {/* GFG Card */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">GeeksforGeeks</h3>
            <a
              href={`https://www.geeksforgeeks.org/user/${encodeURIComponent(gfgUsername)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://gfgstatscard.vercel.app/${encodeURIComponent(gfgUsername)}`}
                alt="GeeksforGeeks stats"
                className="rounded-lg shadow-md w-full"
                
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
