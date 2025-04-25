import React from 'react';
import { Character } from '../types/character';
import TableRow from './TableRow';
import { ArrowUpDown } from 'lucide-react';

interface CharacterTableProps {
  characters: Character[];
  sortDirection: 'asc' | 'desc' | null;
  onSort: () => void;
}

const CharacterTable: React.FC<CharacterTableProps> = ({
  characters,
  sortDirection,
  onSort,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer group"
              onClick={onSort}
            >
              <div className="flex items-center space-x-1">
                <span>Character</span>
                <ArrowUpDown 
                  className={`h-4 w-4 transition-colors ${
                    sortDirection === 'asc' 
                      ? 'text-blue-500 transform rotate-0 transition-transform duration-200' 
                      : sortDirection === 'desc' 
                        ? 'text-blue-500 transform rotate-180 transition-transform duration-200' 
                        : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Species
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Gender
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Origin
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Location
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {characters.map((character) => (
            <TableRow key={character.id} character={character} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;