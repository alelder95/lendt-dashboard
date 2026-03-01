import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-lg font-bold">Navbar</div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Button
      </button>
    </nav>
  );
};
