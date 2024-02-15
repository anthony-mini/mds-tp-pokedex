import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getPokemonById } from '../../services';
import { Data, Type, Evolution } from '../../interfaces';
import { hpIcon, shiny, EvolutionLogo } from '../../assets';
import { PaginationCards } from '../index';

const Cards = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Data>();
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardClass, setCardClass] = useState('card-default');
  const [isShiny, setIsShiny] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onClickShiny = () => {
    setIsShiny(!isShiny);
  };

  useEffect(() => {
    const shinyElement = document.querySelector('.shiny');
    if (!shinyElement) return;

    const onClickChangeImg = () => setIsShiny((prevIsShiny) => !prevIsShiny);
    shinyElement.addEventListener('click', onClickChangeImg);

    return () => {
      shinyElement.removeEventListener('click', onClickChangeImg);
    };
  }, [isShiny]);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;
      try {
        const data = await getPokemonById(id);
        setPokemon(data);
        setIsShiny(false);
      } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
      }
    };
    fetchPokemon();

    // Cleanup function to cancel the fetch request when the component is unmounted -> Utiliser le le strict mode pour éviter les fuites de mémoire;
    return () => {
      setPokemon(undefined);
    };
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

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={`card ${cardClass} ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <div>
            {pokemon && (
              <React.Fragment>
                <div className="card-header">
                  <h1>{pokemon.name?.fr}</h1>
                </div>
                <div className="card-image">
                  {pokemon.sprites?.shiny ? (
                    <button onClick={onClickShiny}>
                      <img src={shiny} className="shiny" alt="shiny png" />
                    </button>
                  ) : null}
                  <button onClick={() => setShowPopup(true)}>
                    <img src={EvolutionLogo} className="evol" alt="" />
                  </button>
                  <img
                    className="pokeImg rounded-full"
                    src={
                      isShiny
                        ? pokemon.sprites?.shiny
                        : pokemon.sprites?.regular
                    }
                    alt={pokemon.name?.fr}
                    onClick={handleFlip}
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
                  {pokemon.stats && (
                    <div className="hp-container">
                      <p className="hp">{pokemon.stats?.hp}</p>
                      <img src={hpIcon} alt="Gotcha" className="hp-icon" />
                    </div>
                  )}
                  <div>
                    {showPopup && (
                      <div className="popup">
                        <button onClick={() => setShowPopup(false)}>
                          Fermer
                        </button>
                        {pokemon.evolution && (
                          <>
                            {pokemon.evolution.pre &&
                              pokemon.evolution.pre.length > 0 &&
                              pokemon.evolution.pre.map(
                                (evolution: Evolution) => (
                                  <div key={evolution.name}>
                                    <p>Pré-évolution : {evolution.name}</p>
                                    <p>Condition : {evolution.condition}</p>
                                  </div>
                                )
                              )}
                            {pokemon.evolution.next &&
                              pokemon.evolution.next.length > 0 &&
                              pokemon.evolution.next.map(
                                (evolution: Evolution) => (
                                  <div key={evolution.name}>
                                    <p>
                                      Prochaine évolution : {evolution.name}
                                    </p>
                                    <p>Condition : {evolution.condition}</p>
                                  </div>
                                )
                              )}
                            {pokemon.evolution.mega &&
                              pokemon.evolution.mega.name && (
                                <div>
                                  <p>
                                    Méga évolution :{' '}
                                    {pokemon.evolution.mega.name}
                                  </p>
                                  <p>
                                    Condition :{' '}
                                    {pokemon.evolution.mega.condition}
                                  </p>
                                </div>
                              )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="back" onClick={handleFlip}>
          {pokemon && (
            <div className="card-back-content">
              <div className="stats">
                {pokemon.stats &&
                  Object.entries(pokemon.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <span className="stat-name">{key}</span>
                      <span className="stat-value">{value}</span>
                    </div>
                  ))}
              </div>
              <div className="info">
                <div className="height-weight">
                  <span className="height">{pokemon.height}</span>
                  <span className="weight">{pokemon.weight}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <PaginationCards currentId={Number(id)} />
    </>
  );
};

export default Cards;
