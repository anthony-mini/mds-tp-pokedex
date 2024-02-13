import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPokemonById } from '../../services';
import { Data, Type } from '../../interfaces';

const Cards = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Data>();
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardClass, setCardClass] = useState('card-default');

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

  useEffect(() => {
    if (pokemon && pokemon.types) {
      const typeName = pokemon.types.map(
        (type: Type) => type.name
      )[0] as string;
      switch (typeName) {
        case 'Plante':
          setCardClass('card-plant');
          break;
        case 'Poison':
          setCardClass('card-poison');
          break;
        case 'Feu':
          setCardClass('card-fire');
          break;

        case 'Eau':
          setCardClass('card-water');
          break;
        case 'Vol':
          setCardClass('card-flying');
          break;
        case 'Insecte':
          setCardClass('card-bug');
          break;
        case 'Normal':
          setCardClass('card-normal');
          break;
        case 'Electrik':
          setCardClass('card-elect');
          break;
        case 'Fée':
          setCardClass('card-fairy');
          break;
        case 'Combat':
          setCardClass('card-fight');
          break;
        case 'Psy':
          setCardClass('card-psychic');
          break;
        case 'Sol':
          setCardClass('card-ground');
          break;
        case 'Roche':
          setCardClass('card-rock');
          break;
        case 'Spectre':
          setCardClass('card-ghost');
          break;
        case 'Dragon':
          setCardClass('card-dragon');
          break;
        case 'Acier':
          setCardClass('card-steel');
          break;
        case 'Glace':
          setCardClass('card-ice');
          break;
        case 'Ténèbres':
          setCardClass('card-dark');
          break;
        default:
          setCardClass('card-default');
      }
    }
  }, [pokemon]);

  return (
    <div
      onClick={handleFlip}
      className={`card ${cardClass} ${isFlipped ? 'flipped' : ''}`}>
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
