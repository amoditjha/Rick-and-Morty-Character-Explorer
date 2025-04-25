import { useState, useEffect } from 'react';
import { Character, ApiResponse } from '../types/character';
import { fetchCharacters, getCharactersUrl } from '../services/api';

interface UseCharactersProps {
  initialPage?: number;
  initialName?: string;
  initialStatus?: string;
  initialGender?: string;
  initialSpecies?: string;
}

interface UseCharactersState {
  characters: Character[];
  loading: boolean;
  error: Error | null;
  info: ApiResponse['info'] | null;
  filters: {
    page: number;
    name: string;
    status: string;
    gender: string;
    species: string;
  };
  setFilters: (filters: Partial<UseCharactersState['filters']>) => void;
  sortDirection: 'asc' | 'desc' | null;
  setSortDirection: (direction: 'asc' | 'desc' | null) => void;
}

export const useCharacters = ({
  initialPage = 1,
  initialName = '',
  initialStatus = '',
  initialGender = '',
  initialSpecies = '',
}: UseCharactersProps = {}): UseCharactersState => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [info, setInfo] = useState<ApiResponse['info'] | null>(null);
  const [filters, setFiltersState] = useState({
    page: initialPage,
    name: initialName,
    status: initialStatus,
    gender: initialGender,
    species: initialSpecies,
  });
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const url = getCharactersUrl(
          filters.page,
          filters.name,
          filters.status,
          filters.gender,
          filters.species
        );
        const data = await fetchCharacters(url);
        
        let results = [...data.results];
        
        if (sortDirection) {
          results = results.sort((a, b) => {
            return sortDirection === 'asc'
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          });
        }
        
        setCharacters(results);
        setInfo(data.info);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [filters, sortDirection]);

  const setFilters = (newFilters: Partial<UseCharactersState['filters']>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters, page: newFilters.page || (newFilters.name !== undefined || newFilters.status !== undefined || newFilters.gender !== undefined || newFilters.species !== undefined ? 1 : prev.page) }));
  };

  return {
    characters,
    loading,
    error,
    info,
    filters,
    setFilters,
    sortDirection,
    setSortDirection,
  };
};