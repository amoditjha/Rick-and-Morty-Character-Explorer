import React from 'react';
import { AlertCircle } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-12 px-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
      <p className="mt-1 text-base text-gray-500">
        Try adjusting your search or filter criteria.
      </p>
    </div>
  );
};

export default EmptyState;