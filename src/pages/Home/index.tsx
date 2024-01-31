import React, { useEffect, useState } from 'react';
import { Header, Select, Grid, Pagination } from '../../components';
import { getAllPokemon, getAllPokemonByGeneration } from '../../services';
import { Data } from '../../interfaces';

const selectGenNumber = [
  { value: '0', label: 'All' },
  { value: '1', label: 'Gen 1' },
  { value: '2', label: 'Gen 2' },
  { value: '3', label: 'Gen 3' },
  { value: '4', label: 'Gen 4' },
  { value: '5', label: 'Gen 5' },
  { value: '6', label: 'Gen 6' },
  { value: '7', label: 'Gen 7' },
  { value: '8', label: 'Gen 8' },
  { value: '9', label: 'Gen 9' }
];

const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [selectedGen, setSelectedGen] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const [search, setSearch] = useState('');

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

  return (
    <React.Fragment>
      <Header />
      <main className="mx-6">
        <section className="flex">
          <div className="action-list">
            <div className="button">
              {/* <Button text="Clear Filter" onClick={()} /> */}
            </div>
          </div>
        </section>
        <section className="mb-6">
          {/* TODO : Refacto (component)*/}
          <div className="pagination flex justify-end space-x-4 space-x-5 mb-6">
            <Select
              options={selectGenNumber}
              value={selectedGen}
              onChange={handleSelectChange}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
            <div className="animate-spin-slow h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
          </div>
          {isLoading ? (
            <div className="animate-spin-slow h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
          ) : (
            <>
              <div className="flex ">
                <input
                  list="pokemon-names"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="p-2 m-2 border bg-gray-100 rounded-md w-[200px] focus:border-blue-500"
                  placeholder="Search a pokemon ..."
                />
                <datalist id="pokemon-names">
                  {currentData.map(
                    (pokemon) =>
                      pokemon.name && (
                        <option key={pokemon.pokedexId} value={pokemon.name.fr}>
                          {pokemon.name.fr}
                        </option>
                      )
                  )}
                </datalist>
              </div>
              {currentData && (
                <Grid
                  data={currentData.filter(
                    (pokemon) =>
                      pokemon.name &&
                      pokemon.name.fr
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  )}
                />
              )}
            </>
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
