import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  statuses: string[];
  genders: string[];
  species: string[];
  onFilterChange: (filters: {
    status?: string;
    gender?: string;
    species?: string;
  }) => void;
  currentFilters: {
    status: string;
    gender: string;
    species: string;
  };
}

const Filters: React.FC<FiltersProps> = ({
  statuses,
  genders,
  species,
  onFilterChange,
  currentFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(currentFilters);

  // Sync localFilters with currentFilters when they change
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...localFilters, [name]: value };
    setLocalFilters(newFilters);
  };

  const handleApply = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    const resetFilters = {
      status: '',
      gender: '',
      species: '',
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
    setIsOpen(false);
  };

  const activeFiltersCount = [
    currentFilters.status,
    currentFilters.gender,
    currentFilters.species,
  ].filter(Boolean).length;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Filter className="h-5 w-5" />
        <span>Filters</span>
        {activeFiltersCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center bg-blue-500 text-white text-xs rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-2 right-0 w-64 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={localFilters.status}
                onChange={handleFilterChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={localFilters.gender}
                onChange={handleFilterChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Genders</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Species
              </label>
              <select
                name="species"
                value={localFilters.species}
                onChange={handleFilterChange}
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Species</option>
                {species.map((specie) => (
                  <option key={specie} value={specie}>
                    {specie}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between pt-2 border-t border-gray-100">
              <button
                onClick={handleReset}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;