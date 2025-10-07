import React, { useState } from 'react';

interface SearchBarProps {
  onDirectoryClick: () => void;
  onRecommendationsClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onDirectoryClick, onRecommendationsClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality if needed
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Suche nach Startups, Produkten oder Kategorien..."
            className="w-full px-6 py-4 text-lg rounded-full border-2 border-[#28184a]/20 focus:border-[#fca80a] focus:outline-none shadow-lg"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={onDirectoryClick}
            className="px-6 py-4 bg-[#28184a] text-white rounded-full font-bold text-lg hover:bg-[#28184a]/90 transition-colors whitespace-nowrap"
          >
            Directory
          </button>
          <button
            type="button"
            onClick={onRecommendationsClick}
            className="px-6 py-4 bg-[#fca80a] text-[#28184a] rounded-full font-bold text-lg hover:bg-[#fca80a]/90 transition-colors whitespace-nowrap"
          >
            Get Recommendations
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;