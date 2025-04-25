import React from 'react';
import { Character } from '../types/character';

interface TableRowProps {
  character: Character;
}

const TableRow: React.FC<TableRowProps> = ({ character }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'Dead':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      <td className="py-4 px-6 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover border border-gray-200"
              src={character.image}
              alt={character.name}
              loading="lazy"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{character.name}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 whitespace-nowrap">
        <span
          className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
            character.status
          )}`}
        >
          {character.status}
        </span>
      </td>
      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        {character.species}
      </td>
      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        {character.gender}
      </td>
      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        {character.origin.name}
      </td>
      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        {character.location.name}
      </td>
      <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
        {new Date(character.created).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default TableRow;