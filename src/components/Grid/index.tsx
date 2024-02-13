import React from 'react';
import { Link } from 'react-router-dom';
import { Type, Talent, Data } from '../../interfaces';
import SVGMemes from '../../assets/doge-hand-drawn.svg';

const Grid: React.FC<{ data: Data[] }> = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Talents
              </th>
              <th>
                <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </div>
              </th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <tbody className="bg-white">
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 whitespace-nowrap text-center">
                  <div className="flex justify-center items-center flex-col space-y-5">
                    <p className="text-lg font-semibold">
                      Veuillez récupérer les Pokémons
                    </p>
                    <img
                      className="animate-blink w-20"
                      src={SVGMemes}
                      alt="dog-memes"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((pokemon) => (
                <tr key={pokemon.pokedexId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/pokemon/${pokemon.pokedexId}`}>
                      {pokemon.pokedexId}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/pokemon/${pokemon.pokedexId}`}>
                      <img
                        className="pokeImg rounded-full"
                        src={pokemon.sprites?.regular}
                        alt={pokemon.name?.fr}
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/pokemon/${pokemon.pokedexId}`}>
                      {pokemon.name?.fr}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pokemon.types &&
                      pokemon.types.map((type: Type) => (
                        <div
                          key={type.name}
                          className="flex items-center space-x-2">
                          <img
                            src={type.image}
                            alt={type.name}
                            className="w-5 h-5 rounded-full"
                          />
                          <span>{type.name}</span>
                        </div>
                      ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pokemon.talents &&
                      pokemon.talents
                        .map((talent: Talent) => talent.name)
                        .join(', ')}
                  </td>
                  <td>
                    <div className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-between">
                        <div>
                          <table className="table-auto">
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 text-red-500 font-semibold	text-sm	">
                                  HP:
                                </td>
                                <td className="px-4 py-2 text-sm	">
                                  {pokemon.stats?.hp}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-green-500 font-semibold	text-sm	">
                                  Attack:
                                </td>
                                <td className="px-4 py-2 text-sm	">
                                  {pokemon.stats?.atk}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-blue-500 font-semibold text-sm		">
                                  Defense:
                                </td>
                                <td className="px-4 py-2 text-sm">
                                  {pokemon.stats?.def}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <table className="table-auto">
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 text-yellow-500 font-semibold text-sm	">
                                  Sp. Atk:
                                </td>
                                <td className="px-4 py-2 text-sm	">
                                  {pokemon.stats?.spe_atk}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-indigo-500 font-semibold text-sm	">
                                  Sp. Def:
                                </td>
                                <td className="px-4 py-2 text-sm	">
                                  {pokemon.stats?.spe_def}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 text-purple-500 font-semibold text-sm	">
                                  Speed:
                                </td>
                                <td className="px-4 py-2 text-sm	">
                                  {pokemon.stats?.vit}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Grid;
