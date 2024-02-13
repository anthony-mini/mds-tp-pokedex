import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPokemonById } from '../../services';
import { Data, Type } from '../../interfaces';

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
            <React.Fragment>
              <div className="card-header">
                <h1>{pokemon.name?.fr}</h1>
              </div>
              <div className="card-image">
                <img
                  className="pokeImg rounded-full"
                  src={pokemon.sprites?.regular}
                  alt={pokemon.name?.fr}
                />
              </div>
              <div className="card-footer">
                {pokemon.types &&
                  pokemon.types.map((type: Type) => (
                    <div key={type.name}>
                      <img
                        src={type.image}
                        alt={type.name}
                        className="footer-icon"
                      />
                    </div>
                  ))}
              </div>
            </React.Fragment>
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
