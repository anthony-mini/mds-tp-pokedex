import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPokemonById } from '../../services';
import { Data } from '../../interfaces';

const Cards = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Data>();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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
    <div onClick={handleFlip} className={`card ${isFlipped ? 'flipped' : ''}`}>
      <div className="front">
        <div>
          {pokemon && (
            <div>
              <h1>{pokemon.name?.fr}</h1>
            </div>
          )}
        </div>
      </div>
      <div className="back">
        {pokemon && (
          <div>
            <img
              className="pokeImg rounded-full"
              src={pokemon.sprites?.regular}
              alt={pokemon.name?.fr}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
