import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CharacterTable from "./components/CharacterTable";
import Pagination from "./components/Pagination";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorDisplay from "./components/ErrorDisplay";
import EmptyState from "./components/EmptyState";
import ActiveFilters from "./components/ActiveFilters";
import { useCharacters } from "./hooks/useCharacters";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [uniqueSpecies, setUniqueSpecies] = useState<string[]>([]);

  const {
    characters,
    loading,
    error,
    info,
    filters,
    setFilters,
    sortDirection,
    setSortDirection,
  } = useCharacters();

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Apply search term filter
  useEffect(() => {
    if (debouncedSearchTerm !== filters.name) {
      setFilters({ name: debouncedSearchTerm, page: 1 });
    }
  }, [debouncedSearchTerm, filters.name]);

  // Fetch all available species
  useEffect(() => {
    const fetchAllSpecies = async () => {
      const allSpecies = new Set<string>();
      let nextPage = 1;
      let hasMore = true;

      while (hasMore) {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${nextPage}`
          );
          const data = await response.json();

          data.results.forEach((char: any) => {
            if (char.species) {
              allSpecies.add(char.species);
            }
          });

          if (data.info.next) {
            nextPage++;
          } else {
            hasMore = false;
          }
        } catch (error) {
          console.error("Error fetching species:", error);
          hasMore = false;
        }
      }

      const sortedSpecies = Array.from(allSpecies).sort();
      setUniqueSpecies(sortedSpecies);
    };

    fetchAllSpecies();
  }, []);

  const handleSearch = () => {
    setFilters({ name: searchTerm, page: 1 });
  };

  const handleFilterChange = (newFilters: {
    status?: string;
    gender?: string;
    species?: string;
  }) => {
    setFilters({ ...newFilters, page: 1 });
  };

  const handleRemoveFilter = (filterType: "status" | "gender" | "species") => {
    const newFilters = { ...filters, [filterType]: "" };
    setFilters(newFilters);
  };

  const handleSort = () => {
    const newDirection =
      sortDirection === null ? "asc" : sortDirection === "asc" ? "desc" : null;
    setSortDirection(newDirection);
  };

  const handlePageChange = (page: number) => {
    setFilters({ page });
  };

  const handleRetry = () => {
    setFilters({ ...filters });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt="Rick Sanchez"
                className="mr-2 h-8 w-8 rounded-full"
              />
              Rick and Morty Character Explorer
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <div className="w-full sm:w-96">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                onSearch={handleSearch}
              />
            </div>
            <div className="flex justify-end">
              <Filters
                statuses={["Alive", "Dead", "unknown"]}
                genders={["Female", "Male", "Genderless", "unknown"]}
                species={uniqueSpecies}
                onFilterChange={handleFilterChange}
                currentFilters={{
                  status: filters.status,
                  gender: filters.gender,
                  species: filters.species,
                }}
              />
            </div>
          </div>
          <ActiveFilters
            filters={{
              status: filters.status,
              gender: filters.gender,
              species: filters.species,
            }}
            onRemoveFilter={handleRemoveFilter}
          />
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorDisplay message={error.message} onRetry={handleRetry} />
        ) : characters.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
              <CharacterTable
                characters={characters}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </div>

            {info && (
              <div className="mt-6 bg-white shadow-sm rounded-lg p-4 border border-gray-200">
                <Pagination
                  currentPage={filters.page}
                  totalPages={info.pages}
                  onPageChange={handlePageChange}
                  hasNextPage={!!info.next}
                  hasPrevPage={!!info.prev}
                />
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-2">
            <span className="font-bold">Data provided by:</span>
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors pr-2"
            >
              The Rick and Morty API
            </a>
            |<span className="font-bold"> Assignment For:</span>
            <a
              href="https://dreamcyberinfoway.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors pr-2"
            >
              Dream Cyber Infoway, Indore
            </a>
            |<span className="font-bold"> Developed by:</span>
            <a
              href="https://amoditjha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Amodit Jha
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
