import React, { useEffect, useState } from 'react';
import { Header, Button, Select, Grid } from '../../components';
import { getAllGen } from '../../services';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const selectGenNumber = [
  { value: '1', label: 'Gen 1' },
  { value: '2', label: 'Gen 2' },
  { value: '3', label: 'Gen 3' },
  { value: '4', label: 'Gen 4' },
  { value: '5', label: 'Gen 5' },
  { value: '6', label: 'Gen 6' },
  { value: '7', label: 'Gen 7' }
  // { value: '8', label: 'Gen 8' },
  // { value: '9', label: 'Gen 9' }
];

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [selectedGen, setSelectedGen] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Ajouter un état pour la page actuelle
  const itemsPerPage = 50;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await getAllGen(selectedGen);
      setData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [selectedGen]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGen(event.target.value);
  };

  return (
    <React.Fragment>
      <Header />
      <main className="mx-6">
        <section className="flex">
          <div className="action-list">
            <div className="button">{/* <Button text="Clear Filter" onClick={()} /> */}</div>
          </div>
        </section>
        <section className="my-6">
          {/* TODO : Refacto (component)*/}
          <div className="pagination flex justify-end space-x-4 mt-4 space-x-5">
            <Select options={selectGenNumber} value={selectedGen} onChange={handleSelectChange} />
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`h-8 w-8 px-3 py-0.25 border rounded-md w-30 bg-blue-500 text-white`}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className="self-center">{`Page ${currentPage} sur ${totalPages}`}</span>
            <button
              onClick={handleNextPageClick}
              className={`h-8 w-8 px-3 py-0.25 border rounded-md w-30 bg-blue-500 text-white`}>
              <FontAwesomeIcon icon={faArrowRight} className="icon-arrow" />
            </button>
            <div className="animate-spin-slow h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
          </div>
          {isLoading ? (
            <div className="animate-spin-slow h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
          ) : (
            <Grid data={currentData} />
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
