import React, { useEffect, useState } from 'react';
import { Header, Button, Select, Grid } from '../../components';
import { getAllGen } from '../../services';

const selectGenNumber = [
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

// const filterAge = [
//   { value: '0', label: 'Mixed Age' },
//   { value: '1', label: 'Asc' },
//   { value: '2', label: 'Desc' }
// ];

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [selectedGen, setSelectedGen] = useState('1');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = `React - TS - Webpack - Template`;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await getAllGen(selectedGen); // Convertir selectedGen en nombre
      setData(response);
      setIsLoading(false);
    };
    fetchData();
  }, [selectedGen]); // Ajouter selectedGen comme dépendance

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGen(event.target.value);
  };

  const handleButtonClick = () => {
    getAllGen(selectedGen);
  };

  return (
    <React.Fragment>
      <Header />
      <main className="mx-6">
        <section className="flex">
          <div className="action-list">
            <div className="button">
              <Button text="Fetch Users" onClick={handleButtonClick} />
              {/* <Button text="Clear Filter" onClick={()} /> */}
            </div>
            <div className="select">
              <Select options={selectGenNumber} value={selectedGen} onChange={handleSelectChange} />
              {/* <Select options={filterAge} /> */}
            </div>
          </div>
        </section>
        <section className="my-6">
          {isLoading ? (
            <p>Chargement...</p> // Afficher un indicateur de chargement si les données sont en cours de chargement
          ) : (
            <Grid data={data} />
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
