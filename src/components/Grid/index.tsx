import React from 'react';
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
                    {pokemon.pokedexId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      className="h-20 w-20 rounded-full"
                      src={pokemon.sprites?.regular}
                      alt={pokemon.name?.fr}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pokemon.name?.fr}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pokemon.types &&
                      pokemon.types.map((type: Type) => type.name).join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pokemon.talents &&
                      pokemon.talents
                        .map((talent: Talent) => talent.name)
                        .join(', ')}
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
