import { ApiResponse } from '../types/character';

export const fetchCharacters = async (url: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getCharactersUrl = (
  page = 1,
  name?: string,
  status?: string,
  gender?: string,
  species?: string
): string => {
  const baseUrl = 'https://rickandmortyapi.com/api/character';
  const params = new URLSearchParams();
  
  if (page) params.append('page', page.toString());
  if (name) params.append('name', name);
  if (status) params.append('status', status);
  if (gender) params.append('gender', gender);
  if (species) params.append('species', species);
  
  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};