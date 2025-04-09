import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full max-w-5xl mx-auto border-2 border-black px-4 py-2 text-base font-medium bg-blue-50 rounded-md shadow-sm mt-4">
      
      <div className="flex gap-4 mb-2 sm:mb-0">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>

      <div className="text-gray-800">{`Page ${page} of ${totalPages}`}</div>
    </div>
  );
}