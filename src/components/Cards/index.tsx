import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPokemonById } from '../../services';
import { Data } from '../../interfaces';

const Cards = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Data>();
  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;
      try {
        const data = await getPokemonById(id);
        setPokemon(data);
      } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
      }
    };
    fetchPokemon();
  }, [id]);

  return (
    <div>
      {pokemon && (
        <div>
          <h1>{pokemon.name?.fr}</h1>
        </div>
      )}
    </div>
  );
};

export default Cards;
