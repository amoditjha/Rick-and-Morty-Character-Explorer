import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[...Array(7)].map((_, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(10)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(7)].map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    {colIndex === 0 ? (
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        <div className="ml-4">
                          <div className="h-4 bg-gray-300 rounded w-24"></div>
                        </div>
                      </div>
                    ) : colIndex === 1 ? (
                      <div className="h-6 bg-gray-300 rounded-full w-16"></div>
                    ) : (
                      <div className="h-4 bg-gray-300 rounded w-20"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingSkeleton;