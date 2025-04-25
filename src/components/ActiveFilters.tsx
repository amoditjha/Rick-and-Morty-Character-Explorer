import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersProps {
  filters: {
    status: string;
    gender: string;
    species: string;
  };
  onRemoveFilter: (filterType: 'status' | 'gender' | 'species') => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({ filters, onRemoveFilter }) => {
  const activeFilters = Object.entries(filters).filter(([_, value]) => value !== '');

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {activeFilters.map(([key, value]) => (
        <span
          key={key}
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm transition-colors"
        >
          {key}: {value}
          <button
            onClick={() => onRemoveFilter(key as 'status' | 'gender' | 'species')}
            className="p-0.5 hover:bg-blue-100 rounded-full transition-colors"
            aria-label={`Remove ${key} filter`}
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
    </div>
  );
};

export default ActiveFilters;