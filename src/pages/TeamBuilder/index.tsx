import React, { useEffect, useState } from 'react';
import { Header } from '../../components/index';
import { Data } from '../../interfaces';
import { removeItem } from '../../services';
import { Link } from 'react-router-dom';
import { MorePoke } from '../../assets';

const TeamBuilder = () => {
  const [pokemonList, setPokemonList] = useState<Data[]>([]);
  useEffect(() => {
    const keys = Object.keys(localStorage);
    const pokemonData = keys.map((key) => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : {};
    });
    setPokemonList(pokemonData);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <h1 className="text-2xl font-bold text-center mb-5 mt-5">Mes Pokémons</h1>
      <section className="section">
        <div className="bloc-card flex">
          {pokemonList.map((pokemon, index) => (
            <div key={index} className="pokemonCardsContainer">
              <h2>{pokemon.name?.fr}</h2>
              <img src={pokemon.sprites?.regular} alt={pokemon.name?.fr} />
              <button
                onClick={() => {
                  const audio = new Audio('/035-clefairy.mp3');
                  audio.play();

                  removeItem(String(pokemon.pokedex_id));
                  setPokemonList(
                    pokemonList.filter((p) => p.name?.fr !== pokemon.name?.fr)
                  );
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3">
                Supprimer
              </button>
            </div>
          ))}
          <div className="pokemonCardsContainer bg-gray-200 rounded-lg shadow-lg p-6 m-4">
            <Link to="/" className="z-20 flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">Ajouter un Pokémon</h2>
              <img src={MorePoke} alt="more pokemon" className="w-32 h-32" />
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeamBuilder;
