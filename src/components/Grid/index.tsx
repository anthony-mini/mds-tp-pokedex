import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Talent, Data } from '../../interfaces';
import SVGMemes from '../../assets/doge-hand-drawn.svg';

const Grid: React.FC<{ data: Data[] }> = ({ data }) => {
  return (
    <div className="gridContainer">
      {data.length === 0 ? (
        <div className="emptyDataContainer">
          <p className="emptyDataText">All the pokemon are dead</p>
          <img className="emptyDataImage" src={SVGMemes} alt="dog-memes" />
        </div>
      ) : (
        data.map((pokemon) => {
          let cardClass = 'card-default';
          if (pokemon.types && pokemon.types.length > 0) {
            const typeName = pokemon.types[0].name;
            switch (typeName) {
              case 'Plante':
                cardClass = 'card-plant';
                break;
              case 'Poison':
                cardClass = 'card-poison';
                break;
              case 'Feu':
                cardClass = 'card-fire';
                break;
              case 'Eau':
                cardClass = 'card-water';
                break;
              case 'Vol':
                cardClass = 'card-flying';
                break;
              case 'Insecte':
                cardClass = 'card-bug';
                break;
              case 'Normal':
                cardClass = 'card-normal';
                break;
              case 'Electrik':
                cardClass = 'card-elect';
                break;
              case 'Fée':
                cardClass = 'card-fairy';
                break;
              case 'Combat':
                cardClass = 'card-fight';
                break;
              case 'Psy':
                cardClass = 'card-psychic';
                break;
              case 'Sol':
                cardClass = 'card-ground';
                break;
              case 'Roche':
                cardClass = 'card-rock';
                break;
              case 'Spectre':
                cardClass = 'card-ghost';
                break;
              case 'Dragon':
                cardClass = 'card-dragon';
                break;
              case 'Acier':
                cardClass = ' card-steel';
                break;
              case 'Glace':
                cardClass = 'card-ice';
                break;
              case 'Ténèbres':
                cardClass = 'card-dark';
                break;
              default:
                cardClass = 'card-default';
            }
          }

          return (
            <React.Fragment key={pokemon.pokedex_id}>
              <Link to={`/pokemon/${pokemon.pokedex_id}`}>
                <div className={`pokemonContainer ${cardClass}`}>
                  <div className="pokemonHeader">
                    <span className="pokemonName">{pokemon.name?.fr}</span>
                  </div>
                  <img
                    className="pokemonImage"
                    src={pokemon.sprites?.regular}
                    alt={pokemon.name?.fr}
                  />

                  <div className="pokemonBody">
                    <div className="pokemonTalents">
                      {pokemon.talents &&
                        pokemon.talents
                          .map((talent: Talent) => talent.name)
                          .join(', ')}
                    </div>
                    <div className="pokemonTypes">
                      {pokemon.types &&
                        pokemon.types.map((type: Type) => (
                          <div key={type.name} className="pokemonType">
                            <img
                              src={type.image}
                              alt={type.name}
                              className="typeImage"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })
      )}
    </div>
  );
};

export default Grid;
