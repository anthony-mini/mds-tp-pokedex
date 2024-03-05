import React, { useEffect, useState } from 'react';
import {
  Header,
  Select,
  Grid,
  Pagination,
  MultiSearchComponent
} from '../../components';
import { getAllPokemon, getAllPokemonByGeneration } from '../../services';
import { Data, Pokemon } from '../../interfaces';

const selectGenNumber = [
  { value: 0, label: 'All' },
  { value: 1, label: 'Gen 1' },
  { value: 2, label: 'Gen 2' },
  { value: 3, label: 'Gen 3' },
  { value: 4, label: 'Gen 4' },
  { value: 5, label: 'Gen 5' },
  { value: 6, label: 'Gen 6' },
  { value: 7, label: 'Gen 7' },
  { value: 8, label: 'Gen 8' },
  { value: 9, label: 'Gen 9' }
];

const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [selectedGen, setSelectedGen] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;

    const fetchData = async () => {
      setIsLoading(true);
      let response;
      if (selectedGen === '0') {
        response = await getAllPokemon();
      } else {
        response = await getAllPokemonByGeneration(selectedGen);
      }
      setData(response);
      setIsLoading(false);
    };

    fetchData();
  }, [selectedGen]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGen(event.target.value);
    setCurrentPage(1);
  };

  const filteredData =
    selectedPokemons.length > 0
      ? currentData.filter((pokemon) =>
          selectedPokemons.some(
            (selectedPokemon) =>
              selectedPokemon.pokedex_id === pokemon.pokedex_id
          )
        )
      : currentData;

  return (
    <React.Fragment>
      <Header />
      <main className="mx-6">
        <section className="mb-6">
          <div className="pagination-grid">
            <div className="pagination-bloc-2 flex flex-wrap justify-center">
              <MultiSearchComponent
                setSelectedPokemons={setSelectedPokemons}
                pokemons={selectedGen === '0' ? currentData : currentData}
              />
              <Select
                options={selectGenNumber}
                value={selectedGen}
                onChange={handleSelectChange}
              />
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
          {isLoading ? (
            <div className="animate-spin-slow h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
          ) : (
            <>
              {filteredData && <Grid key={selectedGen} data={filteredData} />}
              <div className="flex place-content-evenly">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
