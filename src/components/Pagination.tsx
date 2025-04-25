import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  hasNextPage,
  hasPrevPage,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          aria-current={currentPage === i ? 'page' : undefined}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            currentPage === i
              ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          } transition-colors duration-200`}
        >
          {i}
        </button>
      );
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => hasPrevPage && onPageChange(currentPage - 1)}
          disabled={!hasPrevPage}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
            !hasPrevPage
              ? 'cursor-not-allowed opacity-50'
              : 'hover:bg-gray-50'
          } transition-colors duration-200`}
        >
          Previous
        </button>
        <button
          onClick={() => hasNextPage && onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
            !hasNextPage
              ? 'cursor-not-allowed opacity-50'
              : 'hover:bg-gray-50'
          } transition-colors duration-200`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => hasPrevPage && onPageChange(currentPage - 1)}
              disabled={!hasPrevPage}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                !hasPrevPage
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              } transition-colors duration-200`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            
            {renderPageNumbers()}
            
            <button
              onClick={() => hasNextPage && onPageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                !hasNextPage
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              } transition-colors duration-200`}
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;