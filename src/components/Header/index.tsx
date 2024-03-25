import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const updateItemCount = () => {
      const keys = Object.keys(localStorage);
      const pokemonData = keys.map((key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : {};
      });
      setItemCount(pokemonData.length);
    };
    updateItemCount();

    window.addEventListener('localStorageChange', updateItemCount);

    return () => {
      window.removeEventListener('localStorageChange', updateItemCount);
    };
  }, []);

  return (
    <>
      <header
        className="gradient-background flex justify-center items-center "
        id="header">
        <Link to="/" className="z-20">
          <h1 className="title-pokedex">
            Poké<span>dex</span>
          </h1>
        </Link>
        <div className="flex align-center">
          <Link to="/team-builder" className="text-team-builder flex">
            Mes Pokémons
            <div className="item-count bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
              <p>{itemCount}</p>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
